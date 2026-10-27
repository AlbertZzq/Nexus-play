import type { Media, NewsCategory } from './types'
import { p1Catalog } from './p1Catalog'
export interface P1NewsStory {
  id: string; title: string; category: NewsCategory; summary: string; image: Media
  source: string; sourceUrl: string; publishedAt: string | null; updatedAt: string | null
  releaseDate: string | null; gameIds: string[]; sourceKind: 'article' | 'official-page'
}
function story(id: string, gameId: string, title: string, summary: string, source: string, sourceUrl: string, publishedAt: string | null, sourceKind: P1NewsStory['sourceKind'] = 'article'): P1NewsStory {
  const game = p1Catalog.find(game => game.id === gameId)!
  return { id, title, summary, source, sourceUrl, publishedAt, sourceKind, category: 'Releases', updatedAt: null, releaseDate: game.releaseDate, gameIds: [gameId], image: game.screenshots[0] ?? game.cover }
}
// Publication dates verified independently; see docs/p1-content-source-audit.md.
export const p1Newsroom: readonly P1NewsStory[] = [
  story('news-mw4-launch', 'modern-warfare-4', 'Modern Warfare 4: launch briefing', 'Activision outlines the campaign, multiplayer maps and DMZ extraction mode in its worldwide launch briefing.', 'Call of Duty', 'https://www.callofduty.com/blog/2026/10/call-of-duty-modern-warfare-4-live-worldwide-now', '2026-10-23T12:00:00-07:00'),
  story('news-control-resonant', 'control-resonant', 'CONTROL Resonant: inside the genre mix', 'Xbox Wire examines the melee combat, upgrade paths and exploration ahead of the September 24 release.', 'Xbox Wire', 'https://news.xbox.com/en-us/2026/09/23/control-resonant-launch-genre-details/', '2026-09-23T13:00:00Z'),
  story('news-halloween-launch', 'halloween-the-game', 'Halloween: launch and early access explained', 'IllFonic separates September 4 Deluxe early access from the September 8 general release and introduces the launch modes.', 'Halloween: The Game', 'https://halloweengame.com/news/halloween-the-game-launch-and-early-access/', '2026-09-03'),
  story('news-fatal-fury-switch2', 'fatal-fury-city-of-the-wolves', 'Fatal Fury: Switch 2 edition briefing', 'SNK announces the October 22 digital Switch 2 release, handheld play and the Smart and Arcade control styles. Physical release is a separate event.', 'SNK', 'https://www.snk-corp.co.jp/us/press/2026/fatal-fury-city-of-the-wolves-now-available-on-nintendo-switch-2-take-the-heat-of-battle-anywhere-anytime/', null),
  story('news-star-wars-racer', 'star-wars-galactic-racer', 'Star Wars: Galactic Racer launches on PC and consoles', 'The official launch article introduces Galactic League racing on PlayStation 5, Xbox Series X|S and PC.', 'Star Wars: Galactic Racer', 'https://starwarsgalacticracer.com/news/star-wars-galactic-racer-is-out-now/', '2026-10-06T09:34:02Z'),
]
export function selectP1News(now = new Date()): P1NewsStory[] {
  return p1Newsroom.filter(story => story.publishedAt !== null && new Date(story.publishedAt).getTime() <= now.getTime())
    .sort((a, b) => new Date(b.publishedAt!).getTime() - new Date(a.publishedAt!).getTime() || a.id.localeCompare(b.id))
}
