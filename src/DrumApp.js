import './App.css';
import { useState, useEffect, useRef } from 'react';
import React from 'react';

function DrumApp() {

  const [ pressedKey, setPressedKey ] = useState('')
  const [ displayText, setDisplayText ] = useState('')

  const handleKeyDown = (e) => {
    const key = e.key.toUpperCase();
    setPressedKey(key);

    const audioId = document.getElementById(key);

    if (audioId) {
      audioId.play()
      updateDisplay(key);
    };  

    handleClickKey(e);
  };


  const handleClickKey = (e) => {
    const keyClick = e.key.toLowerCase();
    const btnId = document.getElementById(`drum-${keyClick}`);
  
    if (btnId) {
      btnId.click();
      btnId.classList.add('active');

      setTimeout(() => {
        btnId.classList.remove('active');
      }, 100)
    };
  }


  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);


  const handleClick = (e) => {
    const key = e.target.textContent;
    console.log(key);
    const audioId = document.getElementById(key);

    if (audioId) {
      audioId.play();
      updateDisplay(key);
    }
  }

  const updateDisplay = (key) => {
    switch (key) {
      case 'Q':
        setDisplayText('Heater 1');
        break;
      case 'W':
        setDisplayText('Heater 2');
        break;
      case 'E':
        setDisplayText('Heater 3');
        break;
      case 'A':
        setDisplayText('Heater 4');
        break;
      case 'S':
        setDisplayText('Clap');
        break;
      case 'D':
        setDisplayText('Open HH');
        break;
      case 'Z':
        setDisplayText('Kick n\' Hat');
        break;
      case 'X':
        setDisplayText('Kick');
        break;
      case 'C':
        setDisplayText('Closed HH');
        break;
      default:
        setDisplayText('');
    }
  }

  return (
    <div id="drum-machine" style={{backgroundColor: '#ccc'}}>
      <div id="display" style={{display: 'flex', justifyContent: 'center'}}>
        <p style={{fontSize: '24px', fontWeight: 'bold'}}>{displayText}</p>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <button onClick={handleClick} id="drum-q" className="drum-pad"><audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3" className='clip' id="Q"></audio>Q</button>
        <button onClick={handleClick} id="drum-w" className="drum-pad"><audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3" className='clip' id="W"></audio>W</button>
        <button onClick={handleClick} id="drum-e" className="drum-pad"><audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3" className='clip' id="E"></audio>E</button>
        <button onClick={handleClick} id="drum-a" className="drum-pad"><audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3" className='clip' id="A"></audio>A</button>
        <button onClick={handleClick} id="drum-s" className="drum-pad"><audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3" className='clip' id="S"></audio>S</button>
        <button onClick={handleClick} id="drum-d" className="drum-pad"><audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3" className='clip' id="D"></audio>D</button>
        <button onClick={handleClick} id="drum-z" className="drum-pad"><audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3" className='clip' id="Z"></audio>Z</button>
        <button onClick={handleClick} id="drum-x" className="drum-pad"><audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3" className='clip' id="X"></audio>X</button>
        <button onClick={handleClick} id="drum-c" className="drum-pad"><audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3" className='clip' id="C"></audio>C</button>
      </div>
    </div>
  );

};

export default DrumApp;