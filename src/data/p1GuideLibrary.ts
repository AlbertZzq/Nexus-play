import type { Guide, Media } from './types'

export interface P1Guide extends Guide {
  kind: 'guide' | 'prep'
  goal: string
  sections: { title: string; steps: string[]; media?: Media; caption?: string }[]
  cautions: string[]
  sources: { title: string; url: string }[]
}

// Editorial practice sequences grounded in the official sources linked in each article.
// Existing unsupported short entries are omitted rather than presented as walkthroughs.
export const releasedGuides: readonly P1Guide[] = [
  {
    id: 'guide-star-wars-start', gameId: 'star-wars-galactic-racer',
    title: 'Start strong in the Galactic League', type: 'Beginner', difficulty: 'Beginner', updatedDate: '2026-10-24', kind: 'guide',
    summary: 'Choose a repulsorcraft, prepare with Hibi and understand what survives a failed tour.',
    body: ['Galactic Racer is built around high-stakes runs in the lawless Outer Rim. This practice sequence uses the official vehicle lessons and launch briefing; it is not a tested fastest-route build.'],
    goal: 'Finish a first learning tour knowing your vehicle’s cornering tradeoff, how to fit parts and what to review after a crash.',
    sections: [
      { title: '1. Choose a handling tradeoff', steps: [
        'Watch the official Under the Hood vehicle lessons linked below before choosing a craft. Compare handling with durability rather than selecting on speed alone.',
        'Skim speeders use Knife Edge for sharp corners but accelerate slowly. Speeder bikes offer Kinetic Burst speed at the cost of control and have little armor.',
        'If choosing a podracer, practise a tight corner with its airbrake and notice the speed loss. Repeat the corner to find a balance you can control; this is a learning exercise, not a prescribed racing line.',
      ], media: { src: '/assets/star-wars-galactic-racer-scene-1.jpg', alt: 'STAR WARS: Galactic Racer official gameplay image', kind: 'official' }, caption: 'Official game image · vehicle behavior is explained in the linked Under the Hood lessons.' },
      { title: '2. Prepare in the paddock', steps: [
        'Visit Hibi’s workshop in the planetary paddock. Inspect parts earned through runs or available to buy, including their stat boosts and abilities.',
        'Fit parts that support the handling problem you identified. For a useful comparison, change one choice at a time and note the result on your next attempt.',
        'In Campaign, read the available event choices before continuing the tour. The official briefing confirms branching events and different unlocks; it does not prescribe a single best route.',
      ] },
      { title: '3. Review the run before restarting', steps: [
        'Treat repeated crashes as a tour risk: too many crashes end the tour. When a tour ends, regroup and inspect your available options before beginning again.',
        'Check which perks and unlocks carried forward. The official briefing confirms some persist; it does not say every upgrade survives.',
        'Choose one focus for the next attempt, such as keeping a difficult corner under control. Compare that result before making another vehicle or parts change.',
      ] },
    ],
    cautions: ['Button mappings depend on your platform and settings; use the in-game controls rather than assuming a universal input.', 'This is a beginner practice plan. No guaranteed wins, optimal parts, unlock order or exact crash allowance are claimed.'],
    sources: [
      { title: 'StarWars.com · Under the Hood vehicle lessons (September 29, 2026)', url: 'https://www.starwars.com/news/star-wars-galactic-racer-vehicle-guide' },
      { title: 'StarWars.com · Launch briefing, paddocks and runs (October 6, 2026)', url: 'https://www.starwars.com/news/star-wars-galactic-racer' },
    ],
  },
  {
    id: 'guide-fatal-fury-beginner', gameId: 'fatal-fury-city-of-the-wolves',
    title: 'Learn the REV system before you queue', type: 'Beginner', difficulty: 'Beginner', updatedDate: '2026-10-24', kind: 'guide',
    summary: 'A tutorial-to-training sequence for control styles, REV overheating and your first unranked match.',
    body: ['Use SNK’s official web manual alongside the in-game tutorial. The sequence below is an editorial practice plan, with no character-specific combo or patch-dependent damage claims.'],
    goal: 'Recognize REV overheating and choose a comfortable control style before entering a match that affects your rank.',
    sections: [
      { title: '1. Learn in Practice first', steps: [
        'Open Battle Coliseum, then Practice and Tutorial to work through basic controls and game mechanics.',
        'Choose Smart for button-based specials and auto-combos, or Arcade for command inputs. Test the same character in Training and keep the style whose inputs you can repeat reliably.',
        'Use your platform’s control screen or button configuration. The web manual illustrates default PS5 inputs; those labels are not a Switch 2 button guide.',
      ], media: { src: '/assets/fatal-fury-city-of-the-wolves-scene-1.jpg', alt: 'FATAL FURY City of the Wolves official Switch 2 gameplay image', kind: 'official' }, caption: 'Official Switch 2 game image · consult your platform’s controls for button labels.' },
      { title: '2. Observe the REV meter', steps: [
        'In Training, perform a REV action described in the tutorial and watch the REV meter. Ordinary blocking also raises it.',
        'Observe what happens when it fills: overheat disables REV actions. While overheated, blocking reduces the guard gauge and a depleted guard gauge causes guard crush.',
        'Watch it return to zero to end overheat. SNK says approaching the opponent and landing hits speeds cooling; practise recognizing the state before relying on another REV action.',
        'Check whether S.P.G. is active before trying a REV Blow: it requires that active state. Do not confuse S.P.G., the REV meter and the power gauge.',
      ] },
      { title: '3. Make the first online match unranked', steps: [
        'Return to Battle Coliseum and choose Casual Match when you want online practice without rank or score changes. Ranked Match affects both.',
        'Use a single learning objective, such as noticing an overheat before attempting another REV action. Winning is not the measurement for this exercise.',
        'After the match, return to Practice to repeat the situation that caused trouble. Review the current in-game News for version changes before following older character advice.',
      ] },
    ],
    cautions: ['Character moves and balance can change with updates; use current move lists for specific commands.', 'Manual menu and feature availability may vary by version. Follow the labels in your installed edition; no cross-platform button equivalence is assumed.'],
    sources: [
      { title: 'SNK web manual · Mode Select and Practice', url: 'https://www.snk-corp.co.jp/webmanual/fatalfury-cotw/mainmenu/?lang=en-US' },
      { title: 'SNK web manual · Control styles, gauges and battle mechanics', url: 'https://www.snk-corp.co.jp/webmanual/fatalfury-cotw/battle/?lang=en-US' },
    ],
  },
]

export const prepGuides: readonly P1Guide[] = [
  {
    id: 'guide-gta-vi-prep', gameId: 'grand-theft-auto-vi',
    title: 'What to know before Grand Theft Auto VI', type: 'Beginner', difficulty: 'Beginner', updatedDate: '2026-10-24', kind: 'prep',
    summary: 'A platform and purchase checklist using Rockstar’s confirmed release information, with no invented gameplay tips.',
    body: ['This is preparation for an upcoming release, not a mission walkthrough. Use the linked official pages to verify availability and edition contents before spending money.'],
    goal: 'Confirm a supported console, distinguish the game from merchandise and keep launch details tied to official announcements.',
    sections: [
      { title: '1. Verify your platform and date', steps: [
        'Open the official Rockstar game page and check its current release date against this site’s game details and calendar.',
        'Confirm the exact console generation: Rockstar lists PlayStation 5 and Xbox Series X|S. An older console or a PC is not interchangeable with those listed versions.',
        'If your platform is not listed, wait for an explicit official announcement rather than treating a retailer placeholder as confirmation.',
      ], media: { src: '/assets/grand-theft-auto-vi-scene-1.jpg', alt: 'Grand Theft Auto VI official promotional screenshot', kind: 'official' }, caption: 'Official promotional screenshot · this preparation article does not demonstrate playable mission steps.' },
      { title: '2. Check what you are buying', steps: [
        'Follow the official game page’s pre-order options to the relevant platform listing. Check the title, edition and included game content on that listing.',
        'Read any bonus conditions separately from the base game. Do not assume a promotional pack is required to play.',
        'Keep merchandise and collector products separate from a game purchase. Verify whether the item explicitly includes a game license before checkout.',
      ] },
      { title: '3. Recheck the launch information', steps: [
        'Use the game details link below for the canonical release record and official source; use the release calendar to track the date alongside other games.',
        'Check Rockstar’s Newswire and your platform listing nearer release for any preload, download or unlock instructions. Follow only details actually published there.',
        'Do not plan around an assumed storage requirement, universal midnight unlock or PC launch. This checklist provides none of those unverified details.',
      ] },
    ],
    cautions: ['Dates and purchase offers can change. Recheck the official listing at the time of purchase.', 'No mission strategy, performance mode, download size or preload schedule is asserted here.'],
    sources: [
      { title: 'Rockstar Games · GTA VI official game, platforms and editions', url: 'https://www.rockstargames.com/VI' },
      { title: 'Xbox · GTA VI official platform listing', url: 'https://www.xbox.com/en-us/games/grand-theft-auto-vi' },
      { title: 'Rockstar Games · GTA VI Newswire', url: 'https://www.rockstargames.com/newswire?tag=722' },
    ],
  },
]

export const p1GuideLibrary: readonly P1Guide[] = [...releasedGuides, ...prepGuides]
