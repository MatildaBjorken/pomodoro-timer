import React from 'react';

function WorkInterval({ workLength, setWorkLength }) {
  console.log(workLength);
  const handleDecrease = () => {
    setWorkLength(workLength - 5);
  };

  const handleIncrement = () => {
    setWorkLength(workLength + 5);
  };

  return (
    <div className="break">
      <h3 className="sidebar-break">WORK</h3>
      <button className="sidebar-btn" onClick={handleDecrease}>
        -
      </button>
      <p>{workLength} MIN</p>
      <button className="sidebar-btn" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}
export default WorkInterval;
