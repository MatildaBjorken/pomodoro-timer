import React from 'react';

function BreakInterval({ breakLength, setBreakLength, handleDecrease, handleIncrement }) {

  return (
    <div className='break'> 
      <h3 className="sidebar-break">BREAK</h3>
      <button className="sidebar-btn" onClick={handleDecrease}>
        -
      </button>
      <p>{breakLength} min</p>
      <button className="sidebar-btn" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}
export default BreakInterval;
