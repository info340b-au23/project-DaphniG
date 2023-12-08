import React, { useState, useEffect } from 'react';
import ProductCards from './ProductCards';
import cleanserImage from './img/cleanser1.png';
import cleanserImage2 from './img/cleanser2.png';
import cleanserImage3 from './img/cleanser3.png';
import cleanserImage4 from './img/cleanser4.png';
import cleanserImage5 from './img/cleanser5.png';
import cleanserImage6 from './img/cleanser6.png';
import skinCareData from './skin-data.json';


const ProductPage = () => {
 const [sortByPrice, setSortByPrice] = useState(false);
 const [sortAlphabetically, setSortAlphabetically] = useState(false);

 const [productsData, setProductsData] = useState([]);

 useEffect(() => {
   // Set the imported JSON data to productsData state
   setProductsData(skinCareData);
 }, []);





 // Product data
//  const productsData =
//    [
//        {
//          image: cleanserImage,
//          alt: 'Cleanser 1',
//          description:
//            'Cetaphil Face Wash, Daily Facial Cleanser for Sensitive, Combination to Oily Skin, NEW 16 oz, Fragrance Free, Gentle Foaming, Soap Free, Hypoallergenic',
//          price: '$10.99',
//        },
//        {
//          image: cleanserImage2,
//          alt: 'pic of cleanser',
//          description:
//            'CeraVe Hydrating Facial Cleanser | Moisturizing Non-Foaming Face Wash with Hyaluronic Acid, Ceramides and Glycerin | Fragrance Free Paraben Free | 16 Fluid Ounce',
//          price: '$12.49',
//        },
//        {
//          image: cleanserImage3,
//          alt: 'Cleanser 13',
//          description:
//            'Clean & Clear Morning Burst Facial Cleanser, Original,8 Ounce, Gentle Foaming, Soap Free, Hypoallergenic, Fragrance Free Paraben Free ',
//          price: '$15.99',
//        },
//        {
//          image: cleanserImage4,
//          alt: 'pic of cleanser',
//          description:
//            'La Roche-Posay Toleriane Hydrating Gentle Face Cleanser, Daily Facial Cleanser with Niacinamide and Ceramides for Sensitive Skin, Moisturizing Face Wash for Normal to Dry Skin, Fragrance Free',
//          price: '$16.49',
//        },
//        {
//          image: cleanserImage5,
//          alt: 'pic of cleanser',
//          description:
//            'Youth To The People Facial Cleanser - Kale and Green Tea Cleanser - Gentle Face Wash, Makeup Remover + Pore Minimizer for All Skin Types - Vegan (8oz)',
//          price: '$9.49',
//        },
//        {
//          image: cleanserImage6,
//          alt: 'pic of cleanser',
//          description:
//            'TATCHA The Rice Wash | Soft Cream Facial Cleanser Washes Away Buildup Without Stripping Skin For A Soft, Luminous Complexion | 4 oz',
//          price: '$13.49',
//        },
      
//      ];
  


return (
  <div>
    <section className="filters">
      <h2>Filters</h2>
      <ul className="boxes">
        <li>
          <input
            type="checkbox"
            id="price-checkbox"
            onChange={() => setSortByPrice(!sortByPrice)}
            checked={sortByPrice}
          />
          <label htmlFor="price-checkbox">Sort by Price</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="alpha-checkbox"
            onChange={() => setSortAlphabetically(!sortAlphabetically)}
            checked={sortAlphabetically}
          />
          <label htmlFor="alpha-checkbox">Sort Alphabetically</label>
        </li>
      </ul>
    </section>

    <ProductCards
      products={productsData}
      sortByPrice={sortByPrice}
      sortAlphabetically={sortAlphabetically}
    />
  </div>
);
};

export { ProductPage };
