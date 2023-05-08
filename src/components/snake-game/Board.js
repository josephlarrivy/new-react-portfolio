import React, { useEffect, useState } from "react";
import './snakeStyles.css'

import Row from "./Row";



const Board = ({table}) => {

  return (
    <div className="board">
      {table.map((row) => {
        return <Row row={row} />
      })}
    </div>
  )


}

export default Board;