import React, { useState } from 'react';
import icon from './img/backdrop.jpg';

export function NavBar() {
    return (
        <nav>
            <div id="hamburger-menu">
                <a href="#"><i class="fa fa-bars" aria-label="menu"></i></a></div>
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
    )
}

const ProductColumn = () => {
  const [productStates, setProductStates] = useState({
    Cleanser: false,
    Eyecare: false,
    Serum: false,
    Moisturizer: false,
    Toner: false,
  })

  // state needs to be updated to true once add button on Daphni's page is clicked on
  // and then replace the plus with the image
  const handleButtonClick = (product) => {
    setProductStates((prevStates) => ({
      ...prevStates,
      [product]: true,
    }));
  };
  

  return (
<div className="product-column">
      {Object.keys(productStates).map((product) => (
        <div key={product} className="product" onClick={() => handleButtonClick(product)}>
          {product}
        </div>
      ))}
    </div>
  );
};



export function AddButton() {
  const handleButtonClick = () => {
    // figure out code thatnavigates to all products page
  };

  return (
  <div className="add">
            <button type="button" className="add-button">
              <img src="https://www.freeiconspng.com/thumbs/plus-icon/plus-icon-black-2.png" alt="plus-button" className="add-img" />
            </button>
        </div>
  );
}

export function ProductContainer() {
  return (
    <div className="container-box">
      <ProductColumn />
      <div className="add-product-column">
        <AddButton />
        <AddButton />
        <AddButton />
        <AddButton />
        <AddButton />
      </div>
    </div>
  );
}