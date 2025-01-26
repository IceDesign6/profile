import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        I'm ice.
      </div>
      <h1>：） x{count}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Smile
        </button>
      </div>
    </>
  )
}

export default App
