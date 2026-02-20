import { useState } from 'react'
import Confetti from 'react-confetti'
import { Die } from './Die'
import './App.css'

function randomDie() {
  return Math.floor(Math.random() * 6) + 1
}

function App() {
  // useState + lazy init — initial dice created once, not on every re-render
  const [dice, setDice] = useState(() => generateNewDice())

  function generateNewDice() {
    return Array.from({ length: 10 }, (_, i) => ({
      id: i,
      value: randomDie(),
      isHeld: false,
    }))
  }

  // Derived state — computed from dice, not stored in state
  const gameWon = dice.every(die => die.isHeld) && dice.every(die => die.value === dice[0].value)

  // Updater function — new state depends on previous, avoids stale closure
  function hold(id: number) {
    setDice(oldDice => oldDice.map(die =>
        die.id === id ?
            { ...die, isHeld: !die.isHeld } :
            die
    ))
}

  // Updater function + immutability — new array/objects, no mutation
  function rollDice() {
    setDice((prev) =>
      prev.map((die) =>
        die.isHeld ? die : { ...die, value: randomDie() }
      )
    )
  }

  function handleRollOrNewGame() {
    gameWon ? setDice(generateNewDice()) : rollDice()
  }

  return (
    <div className="app">
      {/* Conditional rendering — Confetti only when game won */}
      {gameWon && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={500}
        />
      )}
      <div className="game">
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        {/* List rendering + key — stable key for reconciliation */}
        {/* Controlled components — each Die driven by props from state */}
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
        {/* Lifting state up — dice in App, passed down; callback for child updates */}
        {/* Event handler — user action wires to state update */}
        <button type="button" className="roll-btn" onClick={handleRollOrNewGame}>
          {gameWon ? 'New Game' : 'Roll'}
        </button>
      </div>
    </div>
  )
}

export default App
