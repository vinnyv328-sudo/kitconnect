# KitConnect

This project is configured for a Vite + React frontend using Supabase for authentication and public config values.

## Prerequisites

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies: `npm install`.
4. Create a Supabase project and add your keys to `.env.local`.

## Run Locally

```bash
npm run dev
```

Open the local Vite URL printed in the terminal.

## Environment Variables

Create or update `.env.local` with:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_APP_ID=kitconnect
NEXT_PUBLIC_APP_BASE_URL=http://localhost:5173
NEXT_PUBLIC_FUNCTIONS_VERSION=1
```

These values are used for Supabase auth and the app configuration layer.

## Deployment

This repository is intended to run on Vercel with Supabase-backed auth.

- Set the same `NEXT_PUBLIC_*` values in your Vercel project environment.
- Configure Supabase auth redirect URLs to match your deployed app domain.
- Run `npm run build` before deployment.

## GitHub / Vercel Notes

The app is designed to live in a standard GitHub repo and be deployed through Vercel, with Supabase providing the auth and database connection layer.
