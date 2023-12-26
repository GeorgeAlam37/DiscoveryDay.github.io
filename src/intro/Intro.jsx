// IntroAnimation.jsx

import React, { useEffect } from 'react';
import logo from '../assets/logo.svg'
import './intro.css';


const IntroAnimation = ({ onAnimationComplete }) => {
  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      onAnimationComplete();
    }, 5000); // 5000 milliseconds (5 seconds) for the logo animation

    return () => {
      clearTimeout(animationTimeout);
    };
  }, [onAnimationComplete]);

  return (
    <div className="intro-animation-container bg-light">
      
      <img
        className="intro-logo"
        src={logo}
        alt="intro-logo"
      />
      <div className="intro-line"></div>
    </div>
  );
};

export default IntroAnimation;
