import React, { useState } from 'react';
import BreakInterval from './break';
import WorkInterval from './work';
import Close from '../images/close.svg';
import Burger from '../images/burger.svg';

function Sidebar({
  breakLength,
  workLength,
  decreaseBreak,
  increaseBreak,
  increaseWork,
  decreaseWork,
}) {
  const [navbarOpen, setNavbarOpen] = useState(true);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div>
      <div className='sidebar-main-btn'>
        <button className="sidebar-menu-btn" onClick={handleToggle}>
          {navbarOpen ? '-' : 'Open'}
        </button>
      </div>
      <nav className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
        <div className="sidebar-content">
          <WorkInterval
            workLength={workLength}
            increaseWork={increaseWork}
            decreaseWork={decreaseWork}
          />
          <BreakInterval
            breakLength={breakLength}
            decreaseBreak={decreaseBreak}
            increaseBreak={increaseBreak}
          />
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
