import React from 'react';

function WorkInterval({ workLength, increaseWork, decreaseWork }) {
  return (
    <div className="work">
      <h3 className="sidebar-break">WORK</h3>
      <button className="sidebar-btn" onClick={increaseWork}>
        +
      </button>
      <p>{workLength} MIN</p>

      <button className="sidebar-btn" onClick={decreaseWork}>
        -
      </button>
    </div>
  );
}
export default WorkInterval;
