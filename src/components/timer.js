import { useState, useEffect } from 'react';

function Timer() {
  const [minutes, setMinutes] = useState(25);
  const [secounds, setSecounds] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(false);

  useEffect(() => {}, [secounds]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return (
    <div>
      <div>
        <div>bresk time! new session starts in :</div>
      </div>
      <div>
        {minutes}:{secounds}
      </div>
    </div>
  );
}

export default Timer;
