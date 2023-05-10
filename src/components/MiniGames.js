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
        <button onClick={() => {setShowProject('snakeInstructions')}}>Play Snake</button>
        <br></br>
        <button onClick={() => { setShowProject('gameOfLifeInstructions') }}>Play Conways's Game of Life</button>
      </div>
    )
  } else if (showProject === 'snakeInstructions') {
    return (
      <div id="minigames-instructions-container">
        <h1>Snake</h1>
        <p>Use the arrow keys to control the snake. Gather apples to increase snake length. Running into sides of board or snake body will result in game over.</p>
        <button onClick={() => { setShowProject('snake') }}>Play Snake</button>
        <br></br>
        <button onClick={() => { setShowProject('home') }}>Back To Games</button>
      </div>
    )
  } else if (showProject === 'gameOfLifeInstructions') {
    return (
      <div id="minigames-instructions-container">
        <h1>Conway's Games of Life</h1>
        <p>Choose the first generation of cells by clicking on them, then click 'step' so see the next generation or 'run' for the game to generate new generations automatically.</p>
        <p>Conway's Game of Life is a cellular automaton that is played on a 2D square grid. Each square (cell) on the grid is either alive (black) or dead (orange). Based on the dead/alive cells the following rules are applied and the next generation of cells is generated:</p>
        <p>Any live cell with fewer than two live neighbours dies</p>
        <p>Any live cell with more than three live neighbours dies</p>
        <p>Any live cell with two or three live neighbours lives, unchanged, to the next generation</p>
        <p>Any dead cell with exactly three live neighbours comes to life.</p>
        <br></br>
        <h4>TLDR: Click some boxes and hit 'run'</h4>
        <button onClick={() => { setShowProject('gameOfLife') }}>Play Game of Life</button>
        <br></br>
        <button onClick={() => { setShowProject('home') }}>Back To Games</button>
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