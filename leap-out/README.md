# Leap Out

Stop scrolling. Start doing.

A mobile-first discovery feed for local outdoor and adventure activities around Bolton / Greater Manchester.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- PWA-ready (`manifest.json` + service worker)

## Run locally

```bash
cd leap-out
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Open on your phone (same Wi‑Fi)

```bash
cd leap-out
npm run dev -- --hostname 0.0.0.0
```

Then find your computer’s local IP and visit `http://<your-ip>:3000` on your phone.

### Find your IP

**macOS / Linux**

```bash
ipconfig getifaddr en0
# or
hostname -I
```

**Windows**

```bash
ipconfig
```

Look for your Wi‑Fi adapter’s IPv4 address (often `192.168.x.x`).

On iPhone Safari you can then use **Share → Add to Home Screen** for the PWA experience.
