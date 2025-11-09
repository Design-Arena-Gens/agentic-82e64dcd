# Agentic Welcome

A luminous single-page Next.js experience that greets visitors with warmth, ambient motion, and actionable conversation cues.

## ✨ Highlights

- Next.js 14 App Router with static rendering
- Tailwind CSS for theming, glassmorphism, and responsive layout
- Interactive hero with rotating keywords and a live clock widget
- Crafted copy blocks that explain the conversation flow and benefits
- Production-ready build and lint scripts

## 🚀 Getting Started

```bash
npm install
npm run dev
```

The development server boots on `http://localhost:3000`.

## 🧱 Project Structure

```
app/
  layout.tsx      # Global layout, metadata, fonts
  page.tsx        # Hero, highlights, roadmap, CTA
  globals.css     # Tailwind base, ambient styles
components/
  RealtimeClock.tsx
  WordCarousel.tsx
```

## 🧪 Quality

- `npm run lint` – ESLint with Next.js rules
- `npm run typecheck` – Strict TypeScript validation
- `npm run build` – Production bundling and static generation

## 📦 Deployment

This project is ready for Vercel. From a verified environment:

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-82e64dcd
```

After the deployment completes, wait a few seconds for DNS propagation and verify:

```bash
curl https://agentic-82e64dcd.vercel.app
```

Retry the verification up to three times if needed.
