import './SnakeGame.css';
import React, { useEffect, useRef, useState } from 'react';
import './snakeStyles.css'

import initialTable from "./data";
import Board from './Board';
import useRunAlgorithm from './hooks/useRunAlgorithm';

function SnakeGame({ setShowProject }) {

  const [table, setTable] = useState(initialTable);
  const [snakeBody, setSnakeBody] = useState([[15, 8], [16, 8], [17, 8], [18, 8]])
  const [run] = useRunAlgorithm();

  const [direction, setDirection] = useState('up')
  const directionRef = useRef(direction)
  directionRef.current = direction;

  const [apple, setApple] = useState([2, 2])
  const appleRef = useRef(apple)
  appleRef.current = apple;


  useEffect(() => {
    const timer = setInterval(() => {
      renderNextFrame()
    }, 150);
    return () => clearInterval(timer)
  }, [])


  document.onkeydown = checkKey;
  function checkKey(e) {
    if (e.keyCode == '38') {
      setDirection('up')
    } else if (e.keyCode == '40') {
      setDirection('down')
    } else if (e.keyCode == '37') {
      setDirection('left')
    } else if (e.keyCode == '39') {
      setDirection('right')
    }
  }

  
  const moveApple = (newBody) => {
    const generateCoordinates = () => {
      let randi = (Math.floor(Math.random() * 20) + 1)
      let randk = (Math.floor(Math.random() * 20) + 1)
      
      let snakeBodyString = JSON.stringify(newBody)

      if (snakeBodyString.includes([randi, randk])) {
        return generateCoordinates()
      }

      return ([randi, randk])
    }
    
    let newApple = generateCoordinates()
    
    return newApple
  }
  

  const renderNextFrame = () => {
    let data = run(snakeBody, directionRef.current, appleRef.current)
    let newTable = data[0]
    let newBody = data[1]
    setTable(newTable)
    setSnakeBody(newBody)
    if (newBody === 0) {
      setShowProject('snakeInstructions')
    }
    if (JSON.stringify(newBody[1]) == JSON.stringify(appleRef.current)) {
      let newApple = moveApple(newBody)
      setApple(newApple)
    }
  }

  const exit = () => { setShowProject('home') }

  return (
    <div className="App">
      <button className="exit-button" onClick={exit}><b>Exit</b></button>
      <Board table={table} setShowProject={setShowProject}/>
    </div>
  );
  

}

export default SnakeGame;