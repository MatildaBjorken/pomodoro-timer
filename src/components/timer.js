import { useState, useEffect, useRef } from 'react';
import TicTac from '../images/circle-text.svg';
import getItDone from '../images/getitdone.svg';
import Play from '../images/play.svg';
import Pause from '../images/pause.svg';
import Sidebar from './sidebar';
import Reset from '../images/reset.svg';
import About from './about';
import { Link } from 'react-router-dom';
import Errorm from './error';

import soundfile from '../src_ride.wav';

function Timer() {
  const [workLength, setWorkLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [timerLabel, setTimerLabel] = useState('Work');
  const [seconds, setSeconds] = useState(.1 * 60);
  const [timerRunning, setTimerRunning] = useState(false);
  const myAudio = useRef();

  let min = Math.floor(seconds / 60);
  let sec = seconds % 60;

  useEffect(() => {
    const handleSwitch = () => {
      if (timerLabel === 'Work') {
        setTimerLabel('Break');
        var element = document.getElementById('timer-digits');
        element.classList.add('anotherclass');

        // update the break
        setSeconds(breakLength * 60);
      } else if (timerLabel === 'Break') {
        setTimerLabel('Work');
        const div = document.createElement('div');
        div.classList.add('anotherclass');
        //update the session
        setSeconds(workLength * 60);
      }
    };

    let countdown = null;
    if (timerRunning && seconds > 0) {
      countdown = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else if (timerRunning && seconds === 0) {
      countdown = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
      handleSwitch();
    } else {
      clearInterval(countdown);
    }
    return () => clearInterval(countdown);
  }, [timerRunning, seconds, timerLabel, breakLength, workLength, myAudio]);

  const handleStart = () => {
    setTimerRunning(true);
  };

  const handleStop = () => {
    setTimerRunning(false);
  };
  const handleReset = () => {
    setSeconds(25 * 60);
    setTimerLabel('Work');
    setTimerRunning(false);
    setBreakLength(5);
  };

  const timerMinutes = min < 10 ? `${min}` : min;
  const timerSeconds = sec < 10 ? `0${sec}` : sec;

  const increaseWork = () => {
    if (!timerRunning && workLength < 60) {
      setWorkLength(workLength + 5);
      setSeconds((workLength + 5) * 60);
    }
  };

  const decreaseWork = () => {
    if (!timerRunning && workLength > 5) {
      setWorkLength(workLength - 5);
      setSeconds((workLength - 5) * 60);
    }
  };

  const decreaseBreak = () => {
    if (!timerRunning && breakLength > 1) {
      setBreakLength(breakLength - 1);
    }
  };

  const increaseBreak = () => {
    if (!timerRunning && breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
    if (timerRunning) {
      console.log('men funka');
      return <Errorm />;

      return <h1 className="error-message">Please sign up.</h1>;
    }
  };

  return (
    <div className="main">
      <About />
      <Link className="link" to="task">
        task
      </Link>

      <Sidebar
        activeClassName="active-link"
        breakLength={breakLength}
        workLength={workLength}
        increaseWork={increaseWork}
        decreaseWork={decreaseWork}
        decreaseBreak={decreaseBreak}
        increaseBreak={increaseBreak}
      ></Sidebar>

      <div className="timer-container">
        <div className="circle">
          <img src={TicTac} className="ticktac" />
          <h2 id="timer-label">{timerLabel}</h2>
          <h3 id="timer-digits">
            {timerMinutes}:{timerSeconds}
          </h3>
          <img onClick={handleReset} src={Reset} id="reset" />
        </div>
        <div className="start-btn">
          <div
            id="start_stop"
            onClick={timerRunning ? handleStop : handleStart}
          >
            {timerRunning ? <img src={Pause} /> : <img src={Play} />}
          </div>
        </div>
      </div>
      <audio id="beep" ref={myAudio} src={soundfile} type="audio"></audio>
    </div>
  );
}

export default Timer;
