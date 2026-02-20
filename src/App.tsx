import { useState } from 'react'
import { Die } from './Die'
import './App.css'

function randomDie() {
  return Math.floor(Math.random() * 6) + 1
}

function App() {
  const [dice, setDice] = useState(() =>
    Array.from({ length: 10 }, randomDie)
  )

  function rollDice() {
    setDice(() => Array.from({ length: 10 }, randomDie))
  }

  return (
    <div className="app">
      <div className="game">
        <div className="dice-container">
          {dice.map((value, i) => (
            <Die key={i} value={value} />
          ))}
        </div>
        <button type="button" className="roll-btn" onClick={rollDice}>
          Roll
        </button>
      </div>
    </div>
  )
}

export default App
