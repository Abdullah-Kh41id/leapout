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

## Log (personal diary)

Open the **Log** tab to keep a private photo diary. Entries are stored in the browser (`localStorage`) as JSON — no account required.

### Streak logic

- Any day with **at least one** photo entry counts toward the streak.
- Multiple entries on the same day still count as **one** day.
- If you already logged today, the streak counts consecutive days ending today.
- If you have not logged today yet, yesterday still keeps the streak alive until midnight.
- Miss a full calendar day and the streak resets to 0.

### Quick phone test

1. Open the app on your phone → **Log**
2. Tap **+ Add Leap**, pick a photo, add a title, save
3. Confirm the streak becomes **1 day** and the photo appears in today’s grid
4. Add a second leap the same day → streak stays **1**
5. Refresh the page → entries and streak should still be there
