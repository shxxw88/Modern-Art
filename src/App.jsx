import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="home-heading">
        <h1>
          <span>History of</span>
          <span className="change-font"> Modern Art</span>
        </h1>
    </div>
    <div className="home-subheading">
        <h2> (in no particular order) </h2>
    </div>
    <button className="explore-button">
      Explore
    </button>
    </>
  )
}

export default App
