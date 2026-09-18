# EYOHUSS

EYOHUSS is a hybrid digital platform for streaming media, literature, art, football intelligence, editorial content, an affiliate marketplace, and a reseller SMM panel.

## Stack
- Next.js 16 App Router
- TypeScript
- Tailwind CSS v4
- Zustand + React Context
- Supabase + PostgreSQL
- Stripe Connect
- WebRTC + custom WebSocket signaling server
- Vercel deployment

## Project structure
- src/app — App Router routes
- src/components — reusable UI and features
- src/context — app and feature context providers
- src/hooks — custom hooks
- src/lib — data models, datasets, Supabase, Stripe helpers
- src/actions — server actions for wallet and order mutations
- server/signaling.mjs — WebSocket signaling server for WebRTC negotiation
- supabase/schema.sql — PostgreSQL schema for the live platform

## Local setup
1. Install dependencies:
   npm install
2. Start the signaling server:
   npm run signal
3. Start the Next.js app:
   npm run dev
4. Visit:
   http://localhost:3000

## Environment variables
Create a `.env.local` file using the included `.env.example` template and populate:

- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
- STRIPE_SECRET_KEY
- STRIPE_WEBHOOK_SECRET
- NEXT_PUBLIC_SIGNALING_URL

## Database setup
Apply the SQL in `supabase/schema.sql` to a Supabase Postgres instance.

## Deployment
Deploy the repo to Vercel and set the same environment variables in the project settings. Ensure the custom domain is configured for `eyohuss.store`.

## Production notes
- The signaling server should be run separately from the Next.js app in production.
- The media streaming route uses a WebRTC flow with a custom WebSocket signaling service.
- Server actions are reserved for database mutations, cart and wallet updates, and SMM orders.
