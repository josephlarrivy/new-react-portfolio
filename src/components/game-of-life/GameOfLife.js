import './GameOfLife.css';
import React, { useEffect, useState } from 'react';
import './styles.css'

import initialTable from "./data";
import Board from './Board';
import useRunAlgorithm from './hooks/useRunAlgorithm';

function GameOfLife({setShowProject}) {

  const [table, setTable] = useState(initialTable);
  const [sum, setSum] = useState(0);
  const [run] = useRunAlgorithm();
  const [step, setStep] = useState(false)
  const [onOrOff, setOnOrOff] = useState('off')


  if (onOrOff == 'on') {
    const timer = setTimeout(() => {
      let newTable = run(table)
      setTable(newTable)
    }, 300);
  }

  if (step == true) {
    setStep(false)
    let newTable = run(table)
    setTable(newTable)
    setSum(sum + 1)
  }

  const handleAppClick = () => { setStep(true) }
  const exit = () => {setShowProject('home')}

  const reset = () => {
    const doReset = () => {
      setTable(initialTable);
      setSum(sum)
    }
    doReset()
  }

  const runOnTimer = () => {
    if (onOrOff == 'off') {
      setOnOrOff('on')
    } else {
      setOnOrOff('off')
    }
  }

  if (onOrOff == 'off') {
    return (
      <div className="App">
        <button onClick={handleAppClick}><b>Step</b></button>
        <button onClick={runOnTimer}><b>Run</b></button>
        <button onClick={reset}><b>Reset</b></button>
        <button onClick={exit}><b>Exit</b></button>
        <Board table={table} setTable={setTable} sum={sum} setSum={setSum} />
      </div>
    );
  } if (onOrOff == 'on') {
    return (
      <div className="App">
        <button onClick={runOnTimer}><b>Pause</b></button>
        <Board onOrOff={onOrOff} table={table} setTable={setTable} sum={sum} setSum={setSum} />
      </div>
    );
  }



}

export default GameOfLife;