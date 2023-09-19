import React from 'react';
import './Hero.css';

// fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

import Button from './Button';

const Hero = () => {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted></video>
      <h1>Adventure Awaits</h1>
      <p>What are you wainting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >GET STARTED</Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >WATCH TRAILER <FontAwesomeIcon icon={faPlayCircle} /></Button>
      </div>
    </div>
  );
};

export default Hero;
