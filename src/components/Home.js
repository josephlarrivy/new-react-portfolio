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
          <div id="icons-container">
            <a href="https://github.com/josephlarrivy" target="_blank"><img className="icon" src={require('../images/github-white.png')}></img></a>

            <a href="https://www.linkedin.com/in/josephlarrivy/" target="_blank"><img className="icon" src={require('../images/linkedin-new.png')}></img></a>
          </div>
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