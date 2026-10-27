import type { P1Game } from './p1Catalog'

// Featured-only record. Evidence: docs/p1-featured-sources.md.
export const modernWarfare4: P1Game = {
  id: 'modern-warfare-4',
  slug: 'modern-warfare-4',
  title: 'Call of Duty: Modern Warfare 4',
  description: 'Fight across a global conflict in a story-driven campaign, tactical multiplayer and the extraction sandbox of DMZ.',
  genres: ['Action', 'FPS'],
  platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo'],
  releaseDate: '2026-10-23',
  status: 'Released',
  playerRating: null,
  criticScore: null,
  ratingCount: 0,
  recommendationPercent: null,
  popularity: 0,
  cover: {
    src: '/assets/p1-modern-warfare-4-cover.webp',
    alt: 'Call of Duty: Modern Warfare 4 — official promotional artwork',
    kind: 'official',
  },
  screenshots: [
    { src: '/assets/p1-modern-warfare-4-1.jpg', alt: 'Modern Warfare 4 — official screenshot: first-person firefight in a garage', kind: 'official' },
    { src: '/assets/p1-modern-warfare-4-2.jpg', alt: 'Modern Warfare 4 — official screenshot: close-quarters combat in a server room', kind: 'official' },
    { src: '/assets/p1-modern-warfare-4-3.jpg', alt: 'Modern Warfare 4 — official screenshot: armed squad beside trains', kind: 'official' },
    { src: '/assets/p1-modern-warfare-4-4.jpg', alt: 'Modern Warfare 4 — official screenshot: squad moving through a forest', kind: 'official' },
  ],
  releaseInfo: {
    trailerUrl: 'https://store.steampowered.com/app/4435490/',
    events: [
      {
        date: '2026-10-23', platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo'],
        platformLabel: 'PC / PlayStation 5 / Xbox Series X|S / Nintendo Switch 2 (official global launch)',
        kind: 'Initial release', sourceUrl: 'https://www.callofduty.com/modernwarfare4', checkedOn: '2026-10-23',
      },
      {
        date: '2026-10-22', platforms: ['PC'], platformLabel: 'PC (Steam US storefront date)',
        kind: 'Platform release', sourceUrl: 'https://store.steampowered.com/app/4435490/', checkedOn: '2026-10-23',
      },
      {
        date: '2026-10-23', platforms: ['PlayStation'], platformLabel: 'PlayStation 5 (US storefront date)',
        kind: 'Platform release', sourceUrl: 'https://store.playstation.com/en-us/product/UP0002-PPSA01649_00-CODMW4VAULT00001', checkedOn: '2026-10-23',
      },
      {
        date: '2026-10-22', platforms: ['Xbox'], platformLabel: 'Xbox Series X|S (US storefront date)',
        kind: 'Platform release', sourceUrl: 'https://www.xbox.com/games/store/product/9NWWNS0C3007', checkedOn: '2026-10-23',
      },
    ],
  },
  reviewSnapshot: {
    positivePercent: 88,
    total: 3283,
    scope: 'PC Steam - English lifetime reviews (official store summary)',
    sourceUrl: 'https://store.steampowered.com/app/4435490/?l=english',
    checkedOn: '2026-10-23',
  },
}
