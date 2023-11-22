import React from 'react';



// const ProductCards = () => {
  // const products = [
  //   {
  //     image: cleanserImage,
  //     alt: 'Cleanser 1',
  //     description:
  //       'Cetaphil Face Wash, Daily Facial Cleanser for Sensitive, Combination to Oily Skin, NEW 16 oz, Fragrance Free, Gentle Foaming, Soap Free, Hypoallergenic',
  //     price: '$10.99', // Set the price for the product
  //   },
  //   {
  //     image: cleanserImage2,
  //     alt: 'pic of cleanser',
  //     description:
  //       'CeraVe Hydrating Facial Cleanser | Moisturizing Non-Foaming Face Wash with Hyaluronic Acid, Ceramides and Glycerin | Fragrance Free Paraben Free | 16 Fluid Ounce',
  //     price: '$12.49', // Set the price for the product
  //   },
  //   {
  //     image: cleanserImage3,
  //     alt: 'Cleanser 13',
  //     description:
  //       'Clean & Clear Morning Burst Facial Cleanser, Original,8 Ounce',
  //     price: '$15.99', // Set the price for the product
  //   },
  //   {
  //     image: cleanserImage4,
  //     alt: 'pic of cleanser',
  //     description:
  //       'La Roche-Posay Toleriane Hydrating Gentle Face Cleanser, Daily Facial Cleanser with Niacinamide and Ceramides for Sensitive Skin, Moisturizing Face Wash for Normal to Dry Skin, Fragrance Free',
  //     price: '$12.49', // Set the price for the product
  //   },
  //   {
  //     image: cleanserImage5,
  //     alt: 'pic of cleanser',
  //     description:
  //       'Youth To The People Facial Cleanser - Kale and Green Tea Cleanser - Gentle Face Wash, Makeup Remover + Pore Minimizer for All Skin Types - Vegan (8oz)',
  //     price: '$12.49', // Set the price for the product
  //   },
  //   {
  //     image: cleanserImage6,
  //     alt: 'pic of cleanser',
  //     description:
  //       'TATCHA The Rice Wash | Soft Cream Facial Cleanser Washes Away Buildup Without Stripping Skin For A Soft, Luminous Complexion | 4 oz',
  //     price: '$12.49', // Set the price for the product
  //   },
    
  // ];

//   const ProductCards = ({ products, sortByPrice }) => {
//     const sortProductsByPrice = (productList) => {
//       return productList.slice().sort((a, b) => {
//         const priceA = parseFloat(a.price.replace('$', ''));
//         const priceB = parseFloat(b.price.replace('$', ''));
//         return priceA - priceB;
//       });
//     };
  
//     const filteredProducts = sortByPrice ? sortProductsByPrice(products) : products;

//   return (
//     <section className="cards">

//       <div className="second-container">
//         {products.map((product, index) => (
//           <div key={index}>
//             <img src={product.image} alt={product.alt} />
//             <p>{product.description}</p>
//             <p className="price">Price: {product.price}</p>
//             <p className="plus">+</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProductCards;




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
            {/* Render product information */}
            <img src={product.image} alt={product.alt} />
            <p>{product.description}</p>
            <p className="price">Price: {product.price}</p>
            <p className="plus">+</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCards;
