import { createClientFromRequest } from 'npm:@base44/sdk@0.8.40';

export default async function(req: Request): Promise<Response> {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });

    const body = await req.json();
    const { repoName, owner, description = '', private: isPrivate = true, files = [], commitMessage = 'Update from Base44 KitConnect app' } = body;

    if (!repoName) return Response.json({ error: 'repoName is required' }, { status: 400 });
    if (!files || !files.length) return Response.json({ error: 'No files to export' }, { status: 400 });

    const { accessToken } = await base44.asServiceRole.connectors.getConnection('github');

    const ghHeaders: Record<string, string> = {
      'Authorization': `Bearer ${accessToken}`,
      'Accept': 'application/vnd.github+json',
      'Content-Type': 'application/json',
      'X-GitHub-Api-Version': '2022-11-28'
    };

    const fullName = owner ? `${owner}/${repoName}` : repoName;

    // Try to get the existing repo's main branch
    let existingCommitSha: string | null = null;
    let existingTreeSha: string | null = null;
    let repoFullName = fullName;

    const refRes = await fetch(`https://api.github.com/repos/${fullName}/git/refs/heads/main`, {
      headers: ghHeaders
    });

    if (refRes.ok) {
      // Repo exists — update it
      const refData = await refRes.json();
      existingCommitSha = refData.object.sha;

      // Get the commit's tree SHA
      const commitRes = await fetch(`https://api.github.com/repos/${fullName}/git/commits/${existingCommitSha}`, {
        headers: ghHeaders
      });
      if (commitRes.ok) {
        const commitData = await commitRes.json();
        existingTreeSha = commitData.tree.sha;
      }
    } else {
      // Repo doesn't exist — create it
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
      repoFullName = repo.full_name;
    }

    // Create blobs for all files
    const treeEntries = [];
    for (const file of files) {
      const blobRes = await fetch(`https://api.github.com/repos/${repoFullName}/git/blobs`, {
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

    // Create a tree (use base_tree if updating existing repo to preserve other files)
    const treeBody: Record<string, unknown> = { tree: treeEntries };
    if (existingTreeSha) treeBody.base_tree = existingTreeSha;

    const treeRes = await fetch(`https://api.github.com/repos/${repoFullName}/git/trees`, {
      method: 'POST',
      headers: ghHeaders,
      body: JSON.stringify(treeBody)
    });
    if (!treeRes.ok) {
      const err = await treeRes.json();
      return Response.json({ error: `Failed to create tree: ${err.message}` }, { status: treeRes.status });
    }
    const tree = await treeRes.json();

    // Create the commit
    const commitBody: Record<string, unknown> = {
      message: commitMessage,
      tree: tree.sha,
      parents: existingCommitSha ? [existingCommitSha] : []
    };

    const commitRes = await fetch(`https://api.github.com/repos/${repoFullName}/git/commits`, {
      method: 'POST',
      headers: ghHeaders,
      body: JSON.stringify(commitBody)
    });
    if (!commitRes.ok) {
      const err = await commitRes.json();
      return Response.json({ error: `Failed to create commit: ${err.message}` }, { status: commitRes.status });
    }
    const commit = await commitRes.json();

    // Create or update the main branch ref
    const refMethod = existingCommitSha ? 'PATCH' : 'POST';
    const refUrl = existingCommitSha
      ? `https://api.github.com/repos/${repoFullName}/git/refs/heads/main`
      : `https://api.github.com/repos/${repoFullName}/git/refs`;
    const refBody = existingCommitSha
      ? { sha: commit.sha }
      : { ref: 'refs/heads/main', sha: commit.sha };

    const refUpdateRes = await fetch(refUrl, {
      method: refMethod,
      headers: ghHeaders,
      body: JSON.stringify(refBody)
    });
    if (!refUpdateRes.ok) {
      const err = await refUpdateRes.json();
      return Response.json({ error: `Failed to update branch ref: ${err.message}` }, { status: refUpdateRes.status });
    }

    return Response.json({
      success: true,
      repoUrl: `https://github.com/${repoFullName}`,
      repoName: repoFullName,
      fileCount: files.length,
      commitSha: commit.sha
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}