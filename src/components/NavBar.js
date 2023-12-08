import React from 'react';
// import icon from './img/backdrop.jpg';
import { NavLink } from 'react-router-dom';
// import '@fortawesome/fontawesome-free/css/all.min.css';




function NavBar() {
  return (
    <nav>
      <div id="hamburger-menu">
        <a href="#"><i className="fa fa-bars" aria-label="menu"></i></a>
      </div>
      <div id="menubar">
        <ul>
          <li><NavLink to="/login"> Login</NavLink></li>
          <li><NavLink to="/profile">Profile</NavLink></li>
          <li><NavLink to="/product">Build Routine</NavLink></li>
          <li><NavLink to="/quiz">Skin Quiz</NavLink></li>
        </ul>
      </div>
      {/* <img src={icon} alt="Navigation Icon" /> */}
      <p>Skintellect</p>
    </nav>
  );
}


export default NavBar;


