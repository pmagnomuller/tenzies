import './Die.css'

interface DieProps {
  value: number
  isHeld?: boolean
}

export function Die({ value, isHeld = false }: DieProps) {
  return (
    <button
      type="button"
      className={`die ${isHeld ? 'die--held' : ''}`.trim()}
    >
      {value}
    </button>
  )
}
