import './Die.css'

interface DieProps {
  id: number
  value: number
  isHeld?: boolean
  onHold: (id: number) => void
}

export function Die({ id, value, isHeld = false, onHold }: DieProps) {
  return (
    <button
      type="button"
      className={`die ${isHeld ? 'die--held' : ''}`.trim()}
      onClick={() => onHold(id)}
    >
      {value}
    </button>
  )
}
