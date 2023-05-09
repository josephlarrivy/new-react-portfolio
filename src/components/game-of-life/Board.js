import React, { useEffect, useState } from "react";
import './styles.css'

import Row from "./Row";

const Board = ({onOrOff, table, setTable, sum, setSum}) => {
  
  return (
    <div className="board">
      {table.map((row, index) => {
        return <Row onOrOff={onOrOff} row={row} table={table} setTable={setTable} xIndex={index} sum={sum} setSum={setSum} />
      })}
    </div>
  )
  

}

export default Board;