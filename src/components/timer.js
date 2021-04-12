import { useState, useEffect, useRef } from 'react';
import Break from './break';
import TicTac from '../images/circle-text.svg';
import getItDone from '../images/getitdone.svg';
import Play from '../images/play.svg';
import Pause from '../images/pause.svg';
import Sidebar from './sidebar';
import Reset from '../images/reset.svg';

function Timer() {
  const [workLength, setWorkLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [timerLabel, setTimerLabel] = useState('Work');
  const [seconds, setSeconds] = useState(25* 60);
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
        const div = document.createElement('div');
        div.classList.add("anotherclass");
        // update the break
        setSeconds(breakLength * 60);
      } else if (timerLabel === 'Break') {
        setTimerLabel('Work');
        const div = document.createElement('div');
        div.classList.add("anotherclass");
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
  }, [timerRunning, seconds, timerLabel, breakLength, workLength]);

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

  return (
    <div className="main">
      <div className='getItDone'>
      <img src={getItDone} className='getItDone'/>
      </div>
      <Sidebar
        activeClassName="active-link"
        breakLength={breakLength}
        setBreakLength={setBreakLength}
        workLength={workLength}
        setWorkLength={setWorkLength}
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
        <button
          id="start_stop"
          onClick={timerRunning ? handleStop : handleStart}
        >
          {timerRunning ? <img src={Pause} /> : <img src={Play} />}
        </button>
      </div>
    </div>
  );
}

export default Timer;
