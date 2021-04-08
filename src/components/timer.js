import { useState, useEffect } from 'react';
import Break from './break';
import TicTac from '../images/circle-text.svg';
import getItDone from '../images/getitdone.svg';

function Timer() {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [timerLabel, setTimerLabel] = useState('Work');
  const [seconds, setSeconds] = useState(25 * 60);
  const [timerRunning, setTimerRunning] = useState(false);

  let min = Math.floor(seconds / 60);
  let sec = seconds % 60;

  useEffect(() => {
    const handleSwitch = () => {
      if (timerLabel === 'Work') {
        setTimerLabel('Break');
        // update the break
        setSeconds(breakLength * 60);
      } else if (timerLabel === 'Break') {
        setTimerLabel('Work');
        //update the session
        setSeconds(sessionLength * 60);
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
  }, [timerRunning, seconds, timerLabel, breakLength, sessionLength]);

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
  };

  const timerMinutes = min < 10 ? `${min}` : min;
  const timerSeconds = sec < 10 ? `0${sec}` : sec;

  return (
    <div className="">
      <div className="timer-container">
        <div className="circle">
          <img src={TicTac} className="ticktac" />
          <h2 id="timer-label">{timerLabel}</h2>
          <h3 id="timer-digits">
            {timerMinutes}:{timerSeconds}
          </h3>
        </div>

        <button
          id="start_stop"
          onClick={timerRunning ? handleStop : handleStart}
        >
          Start/Stop
        </button>
        <button onClick={handleReset} id="reset">
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
