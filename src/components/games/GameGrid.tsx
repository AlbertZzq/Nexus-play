import type { Game } from '../../data/types'
import { GameCard } from './GameCard'

export function GameGrid({ games, p1 = false }: { games: readonly Game[]; p1?: boolean }) {
  return <div className="game-grid">{games.map(game => <GameCard key={game.id} game={game} p1={p1} />)}</div>
}
