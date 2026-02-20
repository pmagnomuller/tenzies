import { useState } from 'react'
import { Die } from './Die'
import './App.css'

function randomDie() {
  return Math.floor(Math.random() * 6) + 1
}

function App() {
  const [dice] = useState(() =>
    Array.from({ length: 10 }, randomDie)
  )

  return (
    <div className="app">
      <div className="dice-container">
        {dice.map((value, i) => (
          <Die key={i} value={value} />
        ))}
      </div>
    </div>
  )
}

export default App
