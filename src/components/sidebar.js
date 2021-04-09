import React, { useState } from 'react';
import BreakInterval from './break'
function Sidebar() {
  const [navbarOpen, setNavbarOpen] = useState(true);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  return (
      <div>
    <button onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</button>
    <nav className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
      
      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>   <BreakInterval/></ul>
   
    </nav>
    </div>
  );
}

export default Sidebar;
