export function EmptyState({ title, description, onReset }: { title: string; description: string; onReset?: () => void }) {
  return <div className="empty-state"><h2>{title}</h2><p>{description}</p>{onReset && <button type="button" onClick={onReset}>Reset filters</button>}</div>
}
