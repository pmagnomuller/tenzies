import { useState } from 'react'
import { Die } from './Die'
import './App.css'

function randomDie() {
  return Math.floor(Math.random() * 6) + 1
}

function App() {
  const [dice, setDice] = useState(() =>
    Array.from({ length: 10 }, () => ({
      value: randomDie(),
      isHeld: false,
    }))
  )

  function rollDice() {
    setDice((prev) =>
      prev.map((die) =>
        die.isHeld ? die : { ...die, value: randomDie() }
      )
    )
  }

  return (
    <div className="app">
      <div className="game">
        <div className="dice-container">
          {dice.map((die, i) => (
            <Die key={i} value={die.value} />
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
