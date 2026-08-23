# AGENTS.md

## Project Context

This repository is a Vite + React app configured for Vercel deployment and Supabase authentication.

Start with `README.md` for local setup, environment variables, and deployment workflow.

## Key Files

- `src/`: frontend application source.
- `src/api/supabaseClient.js`: Supabase client setup.
- `src/lib/AuthContext.jsx`: auth state and session management.
- `vite.config.js`: Vite config.
- `.env.local`: local-only environment values; never commit secrets.

## Working Notes

- Use `npm run dev` for local frontend development.
- Prefer public environment variables with the `NEXT_PUBLIC_` prefix.
- Keep Supabase configuration in the shared client instead of importing legacy app-specific SDKs.
- Run the relevant checks from `package.json` before finishing code changes.
