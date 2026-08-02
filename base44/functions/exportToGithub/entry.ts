import { createClientFromRequest } from 'npm:@base44/sdk@0.8.40';

export default async function(req: Request): Promise<Response> {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });

    const body = await req.json();
    const { repoName, description = '', private: isPrivate = true, files = [] } = body;

    if (!repoName) return Response.json({ error: 'repoName is required' }, { status: 400 });
    if (!files || !files.length) return Response.json({ error: 'No files to export' }, { status: 400 });

    const { accessToken } = await base44.asServiceRole.connectors.getConnection('github');

    const ghHeaders: Record<string, string> = {
      'Authorization': `Bearer ${accessToken}`,
      'Accept': 'application/vnd.github+json',
      'Content-Type': 'application/json',
      'X-GitHub-Api-Version': '2022-11-28'
    };

    // 1. Create the repository
    const createRes = await fetch('https://api.github.com/user/repos', {
      method: 'POST',
      headers: ghHeaders,
      body: JSON.stringify({ name: repoName, description, private: isPrivate, auto_init: false })
    });
    if (!createRes.ok) {
      const err = await createRes.json();
      return Response.json({ error: `Failed to create repo: ${err.message}` }, { status: createRes.status });
    }
    const repo = await createRes.json();
    const fullName = repo.full_name;

    // 2. Create blobs for all files (batch)
    const treeEntries = [];
    for (const file of files) {
      const blobRes = await fetch(`https://api.github.com/repos/${fullName}/git/blobs`, {
        method: 'POST',
        headers: ghHeaders,
        body: JSON.stringify({ content: file.content, encoding: 'utf-8' })
      });
      if (!blobRes.ok) {
        const err = await blobRes.json();
        return Response.json({ error: `Failed to create blob for ${file.path}: ${err.message}` }, { status: blobRes.status });
      }
      const blob = await blobRes.json();
      treeEntries.push({ path: file.path, mode: '100644', type: 'blob', sha: blob.sha });
    }

    // 3. Create a tree referencing all blobs
    const treeRes = await fetch(`https://api.github.com/repos/${fullName}/git/trees`, {
      method: 'POST',
      headers: ghHeaders,
      body: JSON.stringify({ tree: treeEntries })
    });
    if (!treeRes.ok) {
      const err = await treeRes.json();
      return Response.json({ error: `Failed to create tree: ${err.message}` }, { status: treeRes.status });
    }
    const tree = await treeRes.json();

    // 4. Create the initial commit
    const commitRes = await fetch(`https://api.github.com/repos/${fullName}/git/commits`, {
      method: 'POST',
      headers: ghHeaders,
      body: JSON.stringify({
        message: 'Initial commit — exported from Base44 KitConnect app',
        tree: tree.sha,
        parents: []
      })
    });
    if (!commitRes.ok) {
      const err = await commitRes.json();
      return Response.json({ error: `Failed to create commit: ${err.message}` }, { status: commitRes.status });
    }
    const commit = await commitRes.json();

    // 5. Create the main branch ref
    const refRes = await fetch(`https://api.github.com/repos/${fullName}/git/refs`, {
      method: 'POST',
      headers: ghHeaders,
      body: JSON.stringify({ ref: 'refs/heads/main', sha: commit.sha })
    });
    if (!refRes.ok) {
      const err = await refRes.json();
      return Response.json({ error: `Failed to create branch ref: ${err.message}` }, { status: refRes.status });
    }

    return Response.json({
      success: true,
      repoUrl: repo.html_url,
      repoName: fullName,
      fileCount: files.length
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}