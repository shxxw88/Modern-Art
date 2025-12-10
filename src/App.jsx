import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="home-heading">
        <h1>
          <span className="change-font">History of Modern Art</span>
        </h1>
    </div>
    <div className="home-subheading">
        <h3> (in no particular order) </h3>
    </div>
   <button className="explore-button">
      Explore <span><i className="gg-arrow-top-right"></i></span> 
    </button>
    </>
  )
}

export default App
