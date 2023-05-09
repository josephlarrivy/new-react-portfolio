import React from "react";
import Square from "./Square";


const Row = ({onOrOff, row, table, setTable, xIndex, sum, setSum}) => {


  return (
    <div>
      {row.map((b, index) => {
        return <Square onOrOff={onOrOff} b={b} table={table} setTable={setTable} xIndex={xIndex} yIndex={index} sum={sum} setSum={setSum} />
      })}
    </div>
  )
  
}

export default Row;