import React, { useEffect, useState } from "react";


const Projects = () => {
  const [displayState, setDisplayState] = useState('closed')
  const [currentDescription, setCurrentDescription] = useState(
    {
      title: '',
      description: '',
      focus: '',
      additional: ''
    }
  )

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
    'NASA Exploration',
    'Park Explorer Pro',
    'Marvel'
  ]

  const nasaDescription =
  {
    title: 'NASA Exploration',
    description: 'Built on NASA\'s API, explore our solar system\'s planets, learn about NASA\'s Spacecraft, track satelites, learn about the Artemis and Apollo missions, and much more.',
    focus: 'Technology: React',
    additional: 'APIs: NASA, TLE',
    link: 'https://nasa-exploration.herokuapp.com/'
  };

  const parkDescription =
  {
    title: 'Park Explorer Pro',
    description: 'Built on the United States National Park Service API, explore United States National Parks. Find parks, campsites, visitor centers, activities, events, and more.',
    focus: 'Technology: React',
    additional: 'APIs: National Parks Service',
    link: 'https://parkexplorerpro-client.herokuapp.com/'
  };

  const marvelDescription =
  {
    title: 'Marvel',
    description: 'Built on Marvel Comics\' API, collect, comment, like, and share your favorite Marvel comics, issues, series, and characters.',
    focus: 'Technology: Python, Flask, Jinja, Postgres',
    additional: 'APIs: Marvel Comics',
    link: 'https://springboard-capstone-marvel.herokuapp.com/home'
  };

  return (
    <div id="education-main-container">
      <h1>Projects</h1>

      <div id="education-container">



        <div className={`title-bubbles-container`}>
          <div
            className="title-bubble"
            onClick={(e) => { setOpenInfo(nasaDescription) }}>
            <p>{titles[0]}</p>
          </div>
          <div
            className="title-bubble"
            onClick={(e) => { setOpenInfo(parkDescription) }}>
            <p>{titles[1]}</p>
          </div>
          <div
            className="title-bubble"
            onClick={(e) => { setOpenInfo(marvelDescription) }}>
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
            <button className={`simple-button-dark-${displayState}`} onClick={() => window.open(currentDescription.link)}>Visit Site</button>
            <button className={`simple-button-dark-${displayState}`} onClick={() => closeViewer()}>Close</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects;