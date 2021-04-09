import { useState, useEffect, useRef } from 'react';
import Break from './break';
import TicTac from '../images/circle-text.svg';
import getItDone from '../images/getitdone.svg';
import Play from '../images/play.svg';
import Pause from '../images/pause.svg';
import Sidebar from './sidebar';

function Timer() {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [timerLabel, setTimerLabel] = useState('Work');
  const [seconds, setSeconds] = useState(25 * 60);
  const [timerRunning, setTimerRunning] = useState(false);

  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = 'main-menu';

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

  //
  const handleDecrease = () => {
    setBreakLength(breakLength - 1);
  };

  const handleIncrement = () => {
    setBreakLength(breakLength + 1);
  };

  return (
    <div className="">
      <Sidebar activeClassName="active-link">
        <Break breakLength={breakLength} setBreakLength={setBreakLength} handleDecrease={handleDecrease} handleIncrement={handleIncrement}/>
      </Sidebar>

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
          {timerRunning ? <img src={Pause} /> : <img src={Play} />}
        </button>
        <button onClick={handleReset} id="reset">
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
