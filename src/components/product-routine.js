import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import {ProductPage} from './ProductPage'
import { Routes,  Route } from 'react-router-dom';



const ProductColumn = () => {
  const navigate = useNavigate();
  
  const handleButtonClick = (productType) => {
    navigate(`/ProductPage?type=${productType.toLowerCase()}`);
  };
  
  const products = ["Cleanser", "Eye Care", "Serum", "Moisturiser", "Toner"];
// const ProductColumn = ({ handleButtonClick }) => {
//   const products = ["Cleanser", "Eyecare", "Serum", "Moisturizer", "Toner"];

  // const navigate = useNavigate();

  // state needs to be updated to true once add button on Daphni's page is clicked on
  // and then replace the plus with the image
  // const handleButtonClick = (product) => {
  //   setProductStates((prevStates) => ({
  //     ...prevStates,
  //     [product]: true,
  //   }));
  // };
  

  return (
    <div className="product-column">
      {products.map((product) => (
        <div
          key={product}
          className="product"
          onClick={() => handleButtonClick(product)}
        >
          {product}
        </div>
      ))}
    </div>
  );
};



export function AddButton({ productType }) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/ProductPage?type=${productType.toLowerCase()}`);
  };

  return (
    <div className="add">
      <button type="button" className="add-button" onClick={handleButtonClick}>
        <img
          src="https://www.freeiconspng.com/thumbs/plus-icon/plus-icon-black-2.png"
          alt="plus-button"
          className="add-img"
        />
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
          <AddButton productType="Cleanser" />
          <AddButton productType="Eye Care" />
          <AddButton productType="Serum" />
          <AddButton productType="Moisturiser" />
          <AddButton productType="Toner" />
        </div>
      </div>
    </main>
  );
}