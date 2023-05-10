import React, { useEffect, useState } from "react";



const MiniProjects = () => {
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
    'Computer Science Visualizer',
    'mRNA Translation Visualizer',
    'Math Hacker'
  ]

  const csvDescription =
  {
    title: 'Computer Science Visualizer',
    description: 'Brush up on the basics of computer science data structures with this app that visualizes stacks, queues, and linked-lists in an easy-to-use format.',
    focus: 'Technology: React',
    link: 'https://computersciencevisualizer.herokuapp.com/'
  };

  const mrnaDescription =
  {
    title: 'mRNA Translation Visualizer',
    description: 'Build a polypeptide with this interactive visualizer that lets you pick messenger RNA sequences to form codons. Watch are your codons are matched to the corresponding amino acids as the protein chain is built out.',
    focus: 'Technology: React',
    link: 'https://mrna-translation-visualizer.herokuapp.com/'
  };

  const mhDescription =
  {
    title: 'Math Hacker',
    description: 'Become a real-life hacker by practicing your math skills and hacking into CompuNinja, the rogue operating system, just like in the movies.',
    focus: 'Technology: React',
    link: 'https://math-hacker.herokuapp.com/'
  };

  return (
    <div id="education-main-container">
      <h1>miniProjects</h1>

      <div id="education-container">



        <div className={`title-bubbles-container`}>
          <div
            className="title-bubble"
            onClick={(e) => { setOpenInfo(csvDescription) }}>
            <p>{titles[0]}</p>
          </div>
          <div
            className="title-bubble"
            onClick={(e) => { setOpenInfo(mrnaDescription) }}>
            <p>{titles[1]}</p>
          </div>
          <div
            className="title-bubble"
            onClick={(e) => { setOpenInfo(mhDescription) }}>
            <p>{titles[2]}</p>
          </div>
        </div>


        <div className={`content-education-container-${displayState}`}>
          <div className="education-content-text">
            <h2>{currentDescription.title}</h2>
            <p>{currentDescription.description}</p>
            <p>{currentDescription.focus}</p>
            <br></br>
            <button className={`simple-button-dark-${displayState}`} onClick={() => window.open(currentDescription.link)}>Visit Site</button>
            <button className={`simple-button-dark-${displayState}`} onClick={() => closeViewer()}>Close</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MiniProjects;