import React from 'react';
import icon from './img/backdrop.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';




function NavBar() {
 return (
   <nav>
     <div id="hamburger-menu">
     <a href="#"><i className="fa fa-bars" aria-label="menu"></i></a>
     </div>
     <div id="menubar">
       <ul>
         <li><a href="index.html">My Profile</a></li>
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


