import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);

  return (
    <nav className="navigation-bar">
      <h1 className="project-name"><Link to="/">Vortex Gambit</Link></h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/future-games">Future Games</Link></li>

        <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <button>Match Details</button>
          {isDropdownVisible && (
            <div className="dropdown-content">
            <Link to="/match-detail">Match Detail Page</Link>
              {/* Add more links to match pages or sections here */}
            </div>
          )}
        </li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
