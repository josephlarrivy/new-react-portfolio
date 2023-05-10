import React, { useState } from "react";

import '../styles/Home.css'

const Home = () => {

  const [displayState, setDisplayState] = useState('closed')

  const openBubble = () => {
    if (displayState === 'open') {
      setDisplayState('closed')
    } else {
      setDisplayState('open')
    } 
  }

  return (
    <div id="home-main-container">
      <div id="home-content-container">
        <div id="home-left">
          <h1 id="name-first">Joseph</h1>
          <h1 id="name-last">Larrivy</h1>
          <p id="subtitle">Software Engineer</p>
        </div>
        <div id="home-right">
          <div className='home-bubble-open' >
            <p></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;