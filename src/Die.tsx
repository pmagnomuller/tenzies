import './Die.css'

interface DieProps {
  value: number
}

export function Die({ value }: DieProps) {
  return <button type="button" className="die">{value}</button>
}
