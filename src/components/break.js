import React from 'react';

function BreakInterval({
  breakLength,
  setBreakLength,
  decreaseBreak,
  increaseBreak,
}) {
  console.log(breakLength);

  return (
    <div className="break">
      <h3 className="sidebar-break">BREAK</h3>

      <button className="sidebar-btn" onClick={increaseBreak}>
        +
      </button>
      <p>{breakLength} MIN</p>
      <button className="sidebar-btn" onClick={decreaseBreak}>
        -
      </button>
    </div>
  );
}
export default BreakInterval;
