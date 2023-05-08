import React from "react";
import Square from "./Square";


const Row = ({row}) => {

  return (
    <div>
      {row.map((b) => {
        return <Square b={b} />
      })}
    </div>
  )

}

export default Row;