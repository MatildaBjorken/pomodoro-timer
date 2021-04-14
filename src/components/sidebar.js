import React, { useState, useEffect } from 'react';
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

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState();
    useEffect(() => {
      function handleResize() {
        if (window.innerWidth >= 900) {
          setWindowSize(true);
          var element = document.querySelector('.menuNav');
          element.classList.add('sidebar');
        } else {
          setNavbarOpen(false);
          setWindowSize(false);
        }
      }
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowSize;
  }
  useWindowSize();

  return (
    <div>
      <div className="sidebar-main-btn">
        <div className="sidebar-menu-btn" onClick={handleToggle}>
          {navbarOpen ? <img src={Close} /> : <img src={Burger} />}
        </div>
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
