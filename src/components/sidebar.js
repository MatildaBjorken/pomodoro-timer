import React, { useState } from 'react';
import BreakInterval from './break';
import WorkInterval from './work';
function Sidebar({ breakLength, setBreakLength, workLength, setWorkLength }) {
  const [navbarOpen, setNavbarOpen] = useState(true);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div>
      <button className='sidebar-menu-btn' onClick={handleToggle}>{navbarOpen ? 'Close' : 'Open'}</button>
      <nav className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
        <WorkInterval workLength={workLength} setWorkLength={setWorkLength} />
        <BreakInterval
          breakLength={breakLength}
          setBreakLength={setBreakLength}
        />
      </nav>
    </div>
  );
}

export default Sidebar;
