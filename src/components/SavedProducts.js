import React from 'react';


function SavedProducts(props) {
  const { productsavedlist } = props;

  const productsavedimage = productsavedlist.map((product, index) => (
    <div key={index} className="flexcard">
      <img className="imgself" src={product.url} alt={product.alt} />
      <p>{/* Product name or description */}</p>
    </div>
  ));

  return (
    <div className="flexrows">
      { /* make it into a button to product page*/}
      <h3 >Search for Products </h3> 
      <section className="flex-item">
        {productsavedimage}
      </section>
    </div>
  );
}

export default SavedProducts;