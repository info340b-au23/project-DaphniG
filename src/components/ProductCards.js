import React, {useState} from 'react';


const ProductCards = ({ products, sortByPrice, sortAlphabetically, filteredProductType }) => {
  const [addedProducts, setAddedProducts] = useState(new Array(products.length).fill(false));

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

  const handleAddClick = (index) => {
    setAddedProducts((prevAddedProducts) => {
      const updatedAddedProducts = [...prevAddedProducts];
      updatedAddedProducts[index] = !updatedAddedProducts[index];
      return updatedAddedProducts;
    });
  };
  
  const productItems = filteredProducts.map((product, index) => (
    <div key={index}>
      <img src={product.image} alt={product.alt} />
      <p>{product.product_name}</p>
      <p className="price">Price: {product.price}</p>
      <div className="add">
        <button type="button" className="add-button" onClick={() => handleAddClick(index)}>
          {addedProducts[index] ? (
            <img src="https://static.vecteezy.com/system/resources/previews/018/824/865/original/green-check-mark-button-without-text-free-png.png" alt="check-mark" className="check-mark-img" />
          ) : (
            <img src="https://www.freeiconspng.com/thumbs/plus-icon/plus-icon-black-2.png" alt="plus-button" className="add-img" />
          )}
        </button>
      </div>
    </div>
  ));
  
  return (
    <section className="cards">
      <div className="second-container">
        {productItems}
      </div>
    </section>
  );
};

export default ProductCards;