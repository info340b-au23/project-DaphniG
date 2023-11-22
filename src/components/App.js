import React from 'react';
import './css/style.css';
// import './img'
import { NavBar, ProductContainer } from './product-routine.js';


//A component!
export default function App() {


  //what content should my App look like?
  return (
    <div>
      <NavBar />
      <h1 className="routine">Build Your Skincare Routine!</h1>
      <ProductContainer />
      <footer>
        <p>© 2023 George, Clement, Miranda</p>
      </footer>
    </div>
  );
}