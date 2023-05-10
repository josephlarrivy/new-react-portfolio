import React, { useState } from "react";

import SnakeGame from '../components/snake-game/SnakeGame'
import '../components/snake-game/snakeStyles.css'
import GameOfLife from '../components/game-of-life/GameOfLife'

import '../styles/MiniGames.css'

const MiniGames = () => {

  const [showProject, setShowProject] = useState('home')


  if (showProject === 'home') {
    return(
      <div id="minigames-none-open-container">
        <h1>miniGames</h1>
        <button onClick={() => {setShowProject('snake')}}>Play Snake</button>
        <br></br>
        <button onClick={() => { setShowProject('gameOfLife') }}>Play Conways's Game of Life</button>
      </div>
    )
  } else if (showProject === 'snake') {
    return (
      <div>
        <SnakeGame setShowProject={setShowProject}/>
      </div>
    )
  } else if (showProject === 'gameOfLife') {
    return (
      <div>
        <GameOfLife setShowProject={setShowProject} />
      </div>
    )
  }
  
}

export default MiniGames;