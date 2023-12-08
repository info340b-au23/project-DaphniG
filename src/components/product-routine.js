import React, { useState } from 'react';


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
    <main>
      <h1> Create Your Skincare Routine</h1>
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
    </main>
  );
}