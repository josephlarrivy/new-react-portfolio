import React, { useEffect, useState } from "react";
import BackgroundOverlay from "../common/BackgroundOverlay";

import '../styles/Education.css'

const Education = () => {

  const [displayState, setDisplayState] = useState('closed')
  const [pointerbarMarginTop, setPointerbarMarginTop] = useState('40px')
  const [currentDescription, setCurrentDescription] = useState(
    {
      title: '',
      description: '',
      focus: '',
      additional: ''
    }
  )

  useEffect(() => {
    if (currentDescription.title === 'Springboard') {
      setPointerbarMarginTop('50px')
    } else if (currentDescription.title === 'University of Wisconsin-Superior') {
      setPointerbarMarginTop('220px')
    } else if (currentDescription.title === 'Community College of Aurora') {
      setPointerbarMarginTop('390px')
    }
  }, [currentDescription])

  const setOpenInfo = (input) => {
    console.log(input)
    if (displayState === 'closed') {
      setCurrentDescription(input)
      setDisplayState('open')
    } else if (displayState === 'open' && currentDescription !== input) {
      setDisplayState('closed')
      setTimeout(() => {
        setCurrentDescription(input)
        setDisplayState('open')
      }, 1000);
    } else {
      setDisplayState('closed')
    }
  }

  const closeViewer = () => {
    setDisplayState('closed')
  }

  const titles = [
    'Springboard',
    'University of Wisconsin-Superior',
    'Community College of Aurora'
  ]

  const springboardDescription =
    {
      title: 'Springboard',
      description: 'Voted best online bootcamp by Course Report in 2019, 2020, and 2021, Springboard\'s Software Engineering track provides a full-stack education. This 800-hour program covers front-end web development, back-end web development, databases, data structures and algorithms. I am glad that I chose Springboard to kickstart my software engineering career.',
      focus: 'Software Engineering',
      additional: 'Topics: JavaScript, Python, Flask, Postgres, Express, Node, React, Data Structures, Algorithms'
    };

  const uwsDescription =
    {
      title: 'University of Wisconsin-Superior',
    description: 'The University of Wisconsin-Superior is a public liberal arts university located in Superior, Wisconsin. Founded in 1893, it offers undergraduate and graduate programs across a range of disciplines. With a focus on experiential learning and community engagement, UW-Superior prepares students for careers and leadership roles in a global society.',
      focus: 'Major: Cellular and Molecular Biology',
      additional: 'Minor: Chemistry'
    };

  const ccaDescription =
    {
      title: 'Community College of Aurora',
    description: 'The Community College of Aurora (CCA) is a public community college located in Aurora, Colorado. Founded in 1984, it offers a range of associate degrees and certificate programs in fields such as business, health sciences, and technology. CCA is committed to providing affordable, accessible education and workforce training to the diverse communities it serves.',
      focus: 'Biology',
      additional: ['Honors: Phi Theta Kappa, President\'s list']
    };

  return (
    <div id="education-main-container">
      <h1>Education</h1>
      
      <div id="education-container">



        <div className={`title-bubbles-container`}>
          <div
            className="title-bubble"
            onClick={(e) => { setOpenInfo(springboardDescription) }}>
              <p>{titles[0]}</p>
          </div>
          <div
            className="title-bubble"
            onClick={(e) => { setOpenInfo(uwsDescription) }}>
            <p>{titles[1]}</p>
          </div>
          <div
            className="title-bubble"
            onClick={(e) => { setOpenInfo(ccaDescription) }}>
            <p>{titles[2]}</p>
          </div>
        </div>
        

        <div className={`content-education-container-${displayState}`}>
          <div className="education-content-text">
            <h2>{currentDescription.title}</h2>
            <p>{currentDescription.description}</p>
            <p>{currentDescription.focus}</p>
            <p>{currentDescription.additional}</p>
            <br></br>
            <button className={`simple-button-dark-${displayState}`} onClick={() => closeViewer()}>Close</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Education;