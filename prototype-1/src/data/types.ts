export type Platform = 'PC' | 'PlayStation' | 'Xbox' | 'Nintendo'
export type GameStatus = 'Released' | 'Upcoming' | 'Early access'
export type GameReleaseType = 'Original' | 'Remake' | 'Remaster' | 'Re-release'
export interface Media { src: string; alt: string; kind: 'official' | 'prototype'; focalPoint?: string }
export interface ReleaseEvent {
  date: string | null
  platforms: Platform[]
  platformLabel: string
  kind: 'Initial release' | 'Platform release' | 'Early access' | 'Full release'
  sourceUrl: string
  checkedOn: string
}
export interface Game {
  id: string
  slug: string
  title: string
  description: string
  genres: string[]
  platforms: Platform[]
  releaseDate: string | null
  status: GameStatus
  releaseType?: GameReleaseType
  playerRating: number | null
  criticScore: number | null
  ratingCount: number
  recommendationPercent: number | null
  popularity: number
  cover: Media
  screenshots: Media[]
  releaseInfo?: { trailerUrl: string; events: ReleaseEvent[] }
}
export type NewsCategory = 'Industry' | 'Updates' | 'Esports' | 'Releases'
export interface NewsItem {
  id: string; title: string; category: NewsCategory; date: string; summary: string
  body: string[]; image: Media; gameId?: string
}
export interface NewsroomItem extends NewsItem { source: string; sourceUrl: string }
export type GuideType = 'Beginner' | 'Build' | 'Boss' | 'Farming' | 'Progression' | 'Collectibles'
export interface Guide {
  id: string; gameId: string; title: string; type: GuideType
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  updatedDate: string; summary: string; body: string[]
}
export interface PlayerReview { id: string; gameId: string; author: string; score: number; excerpt: string }
export interface Discussion {
  id: string; gameId: string; title: string; summary: string; body: string[]
  replies: number; views: number; trending: boolean
}
export interface Deal {
  id: string; gameId: string; platform: Platform; store: string
  originalCents: number; currentCents: number; status: 'Sample active' | 'Sample ended'
}
export interface Release { id: string; gameId: string; date: string; platforms: Platform[] }
