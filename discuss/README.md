This is a [Next.js](https://nextjs.org) Discuss app (topics, posts, comments, GitHub auth, search).

## Getting Started

```bash
npm install
npx prisma migrate dev
npm run dev
```

Copy `.env.example` to `.env` and `.env.local`, then fill in your Postgres URL, GitHub OAuth credentials, and `AUTH_SECRET`.

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel with Postgres

1. Create a Postgres database (Vercel Storage → Postgres, or Neon) and copy `DATABASE_URL`.
2. Create a GitHub OAuth App:
   - Homepage URL: `https://YOUR_APP.vercel.app`
   - Authorization callback URL: `https://YOUR_APP.vercel.app/api/auth/callback/github`
3. Import the `discuss` folder on [Vercel](https://vercel.com/new).
4. Set environment variables on the project:
   - `DATABASE_URL`
   - `GITHUB_CLIENT_ID`
   - `GITHUB_CLIENT_SECRET`
   - `AUTH_SECRET` (run `npx auth secret`)
   - `AUTH_URL` (`https://YOUR_APP.vercel.app`)
5. Deploy. The build script runs `prisma generate`, `prisma migrate deploy`, then `next build`.
