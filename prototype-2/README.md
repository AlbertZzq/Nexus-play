# NexusPlay · Prototype 2 (standalone)

A released-game decision catalogue: 36 games, multi-genre/platform/mode filtering, source-native player ratings, platform-aware CAD prices and 61 specific external guides.

## Run

```powershell
npm ci
npm run dev
```

Open http://127.0.0.1:5174/.

Build/preview:

```powershell
npm run build
npm run preview
```

Preview: http://127.0.0.1:4174/

## Routes

`/`, `/games`, `/games/:slug`, `/guides`.

Retired routes: `/news` → `/`; `/calendar`/`/reviews` → `/games`; `/guides/:guideId` → `/guides`.

## Notes

This folder is a self-contained fork of NexusPlay Prototype 2. The shared original project remains under `F:\Codex\Workspaces
exusplay\.worktrees\implementation`.

The current P2 Home/popular showcase and price/Guides refinements are included from the working tree and may still be uncommitted in the original project. Missing console prices remain explicit; no console historical low is fabricated.
