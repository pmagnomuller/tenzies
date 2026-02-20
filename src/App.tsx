import { useState } from 'react'
import { Die } from './Die'
import './App.css'

function randomDie() {
  return Math.floor(Math.random() * 6) + 1
}

function App() {
  const [dice, setDice] = useState(() =>
    Array.from({ length: 10 }, (_, i) => ({
      id: i,
      value: randomDie(),
      isHeld: false,
    }))
  )

  function hold(id: number) {
    setDice(oldDice => oldDice.map(die =>
        die.id === id ?
            { ...die, isHeld: !die.isHeld } :
            die
    ))
}

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
          {dice.map((die) => (
            <Die
              key={die.id}
              id={die.id}
              value={die.value}
              isHeld={die.isHeld}
              onHold={hold}
            />
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
