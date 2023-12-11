import React from 'react';




const ProductCards = ({ products, sortByPrice, sortAlphabetically,filteredProductType }) => {
 const sortProductsByPrice = (productList) => {
   return productList.slice().sort((a, b) => {
     const priceA = parseFloat(a.price.replace('$', ''));
     const priceB = parseFloat(b.price.replace('$', ''));
     return priceA - priceB;
   });
 };


 const sortAlphabeticallyByDescription = (productList) => {
   return productList.slice().sort((a, b) => {
     const descriptionA = a.product_name.toLowerCase();
     const descriptionB = b.product_name.toLowerCase();
     return descriptionA.localeCompare(descriptionB);
   });
 };


 let filteredProducts = products;

 // Apply filtering based on the selected product type
 if (filteredProductType) {
   filteredProducts = filteredProducts.filter(product =>
     product.product_type.toLowerCase().includes(filteredProductType)
   );
 }


 if (sortAlphabetically) {
   filteredProducts = sortAlphabeticallyByDescription(filteredProducts);
 } else if (sortByPrice) {
   filteredProducts = sortProductsByPrice(filteredProducts);
 }










return (
  <section className="cards">
    <div className="second-container">
      {filteredProducts.map((product, index) => (
        <div key={index}>
          <img src={product.image} alt={product.alt} />
          <p>{product.product_name}</p>
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