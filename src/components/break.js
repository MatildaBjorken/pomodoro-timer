import React from 'react';

function BreakInterval({ breakLength, setBreakLength }) {
  console.log(breakLength);
  const handleDecrease = () => {
    setBreakLength(breakLength - 1);
  };

  const handleIncrement = () => {
    setBreakLength(breakLength + 1);
  };

  return (
    <div className="break">
      <h3 className="sidebar-break">BREAK</h3>
      <button className="sidebar-btn" onClick={handleDecrease}>
        -
      </button>
      <p>{breakLength} MIN</p>
      <button className="sidebar-btn" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}
export default BreakInterval;
