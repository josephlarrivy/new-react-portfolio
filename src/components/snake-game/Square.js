import React, {useState, useEffect} from "react";



const Square = ({b}) => {

  if (b == 0) {
    return (
      <div className="off">
      </div>
    )
  } else if (b == 1) {
    return (
      <div className="on">
      </div>
    )
  } else if (b == 2) {
    return (
      <div className="border">
      </div>
    )
  } else if (b == 3) {
    return (
      <div className="on">
      </div>
    )
  }
}

export default Square;