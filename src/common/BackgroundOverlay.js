import { useEffect, useState } from 'react';
import '../styles/BackgroundOverlay.css'

const BackgroundOverlay = () => {

  const [bubbles, setBubbles] = useState([])

  const colors = ['purple', 'pink', 'peach']

  const generateBubbles = () => {
    const randomBubbles = [];

    for (let i = 0; i < 500; i++) {
      const colorInt = Math.floor(Math.random() * 3);
      const marginLeftInt = Math.floor(Math.random() * 100);
      const marginTopInt = Math.floor(Math.random() * 100);
      const animationDuration = Math.floor(Math.random() * 6 + 2);
      const animationDelay = Math.floor(Math.random() * 50);

      randomBubbles.push({
        color: colors[colorInt],
        marginLeft: marginLeftInt,
        marginTop: marginTopInt,
        animationDuration: animationDuration,
        animationDelay: animationDelay,
        idx: i,
      });
    }

    return randomBubbles;
  };

  useEffect(() => {
    setBubbles(generateBubbles());
  }, []);

  return (
    <div id="background-overlay-container">
      {bubbles.map((bubble) => {
        return (
          <div
            key={bubble.idx}
            className={`bubble-${bubble.color}`}
            style={{
              marginLeft: `${bubble.marginLeft}vw`,
              marginTop: `${bubble.marginTop}vh`,
              animationDuration: `${bubble.animationDuration}s`,
              animationDelay: `${bubble.animationDelay}s`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default BackgroundOverlay;