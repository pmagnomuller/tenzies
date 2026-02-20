import { useState } from 'react'
import Confetti from 'react-confetti'
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

  const gameWon = dice.every(die => die.isHeld) && dice.every(die => die.value === dice[0].value)

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
          {gameWon ? 'You Won!' : 'Roll'}
        </button>
      </div>
    </div>
  )
}

export default App
