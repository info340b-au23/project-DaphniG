import React from 'react';

const ProductCards = ({ products, sortByPrice }) => {
 const sortProductsByPrice = (productList) => {
   return productList.slice().sort((a, b) => {
     const priceA = parseFloat(a.price.replace('$', ''));
     const priceB = parseFloat(b.price.replace('$', ''));
     return priceA - priceB;
   });
 };


 const sortedProducts = sortByPrice ? sortProductsByPrice(products) : products;


 return (
   <section className="cards">
     <div className="second-container">
       {sortedProducts.map((product, index) => (
         <div key={index}>
           <img src={product.image} alt={product.alt} />
           <p>{product.description}</p>
           <p className="price">Price: {product.price}</p>
           <div className="add">
           <button type="button" className="add-button">
           <img src="https://www.freeiconspng.com/thumbs/plus-icon/plus-icon-black-2.png" alt="plus-button" className="add-img" />
           </button>
           </div>


         </div>
       ))}
     </div>
   </section>
 );
};


export default ProductCards;
