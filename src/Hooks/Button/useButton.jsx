// ------------NOTE =>npm install canvas-confetti--------

import  { useEffect } from 'react';
import confetti from 'canvas-confetti';
import './EffectButton.css'
const useButton = () => {
  useEffect(() => {
    const handleButtonClick = () => {
      let canvas = document.createElement("canvas");
      canvas.width = 600;
      canvas.height = 600;
      let container = document.getElementsByClassName("button-wrapper")[0];
      container.appendChild(canvas);

      let confetti_button = confetti.create(canvas);
      confetti_button({
        particleCount: 200,
        spread: 200,
        startVelocity: 15,
        scalar: 0.9,
        ticks: 90
      }).then(() => container.removeChild(canvas));
    };

    const button = document.getElementsByClassName("confetti-button")[0];
    button.addEventListener("click", handleButtonClick);

    return () => {
      button.removeEventListener("click", handleButtonClick);
    };
  }, []);

  return (
    <>
      <div className="button-wrapper">
        <button className="confetti-button">Login</button>
      </div>
    </>
  );
};

export default useButton;
