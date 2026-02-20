import { Die } from './Die'
import './App.css'

function App() {
  const dice = Array.from({ length: 10 }, () => 1)

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
