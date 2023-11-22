import React from 'react';
import icon from './img/backdrop.jpg';

function NavBar() {
  return (
    <nav>
      <div id="hamburger-menu">
        {/* Hamburger menu content */}
      </div>
      <div id="menubar">
        <ul>
          <li><a href="/profile">My Profile</a></li>
          <li><a href="product-routine.html">Skincare Routine</a></li>
          <li><a href="products.html"> Build Routine</a></li>
          <li><a href="quiz.html">Skin Quiz</a></li>
        </ul>
      </div>
      <img src={icon} alt="Navigation Icon" />
      <p>Skintellect</p>
    </nav>
  );
}

export default NavBar;

