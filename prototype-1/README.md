# NexusPlay · Prototype 1 (standalone)

An editorial release-discovery prototype: GTA VI hero, featured carousel, news, release calendar, recent/upcoming catalogue and three internal guides.

## Run

```powershell
npm ci
npm run dev
```

Open http://127.0.0.1:5173/.

Build/preview:

```powershell
npm run build
npm run preview
```

Preview: http://127.0.0.1:4173/

## Routes

`/`, `/news`, `/games`, `/games/:slug`, `/calendar`, `/guides`, `/guides/:guideId`.

`/discover`, `/platforms` and `/deals` redirect to `/games`; `/reviews` goes home.

## Notes

This folder is a self-contained fork of NexusPlay Prototype 1. The shared original project remains under `F:\Codex\Workspaces
exusplay\.worktrees\implementation`.

P1 catalogue: 37 records (29 released, 8 upcoming). Only three games have sourced Steam review snapshots; prices are official store links rather than price history.
