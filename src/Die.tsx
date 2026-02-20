import './Die.css'

// TypeScript interface — typed props for the component
interface DieProps {
  id: number
  value: number
  isHeld?: boolean
  onHold: (id: number) => void
}

// Functional component + props — data and callback from parent
// Controlled component — UI driven by value + isHeld from state
export function Die({ id, value, isHeld = false, onHold }: DieProps) {
  return (
    <button
      type="button"
      className={`die ${isHeld ? 'die--held' : ''}`.trim()}
      onClick={() => onHold(id)} // event handler → callback prop
    >
      {value}
    </button>
  )
}
