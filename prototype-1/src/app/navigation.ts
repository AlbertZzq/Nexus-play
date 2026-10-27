export type NavigationGroup = { label: string; links: readonly { label: string; to: string }[] }

export const navigation: readonly NavigationGroup[] = [
  { label: 'Explore', links: [
    { label: 'Home', to: '/' },
    { label: 'Games', to: '/games' },
    { label: 'Guides', to: '/guides' },
  ] },
]

// Prototype 1 primary navigation: Games replaces Discover/Platforms, and Reviews/Deals no longer live in the bar.
export const p1Navigation: readonly NavigationGroup[] = [
  { label: 'Primary', links: [
    { label: 'Home', to: '/' },
    { label: 'News', to: '/news' },
    { label: 'Games', to: '/games' },
    { label: 'Release Calendar', to: '/calendar' },
    { label: 'Guides', to: '/guides' },
  ] },
]
