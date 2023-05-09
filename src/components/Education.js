import React, { useState } from "react";

import '../styles/Education.css'

const Education = () => {

  const [titleBubblesEducationState, setTitleBubblesEducationState] = useState('closed')

  const setOpenInfo = (e) => {
    console.log(e.target.textContent)
    if (titleBubblesEducationState === 'open') {
      setTitleBubblesEducationState('closed')
    } else {
      setTitleBubblesEducationState('open')
    }
  }

  return (
    <div id="education-main-container">
      <h1>Education</h1>
      <div id="education-container">

        <div className={`title-bubbles-container-${titleBubblesEducationState}`}>
          <div
            className="title-bubble"
            onClick={(e) => { setOpenInfo(e) }}>
              <p>Springboard</p>
          </div>
          <div
            className="title-bubble"
            onClick={(e) => { setOpenInfo(e) }}>
              <p>University of Wisconsin-Superior</p>
          </div>
          <div
            className="title-bubble"
            onClick={(e) => { setOpenInfo(e) }}>
              <p>Community College of Aurora</p>
          </div>
        </div>

        <div className={`content-education-container-${titleBubblesEducationState}`}>
          <div className="education-content-springboard">
            
          </div>
          <div className="education-content-uws">

          </div>
          <div className="education-content-cca">

          </div>
        </div>

      </div>
    </div>
  )
}

export default Education;
