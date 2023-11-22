
// import React, { useState } from 'react';
// import {ProductCards, ProductPage} from './ProductCards'; // Assuming ProductCards component is in a separate file

// function Filters() {
//   return (
//     <section className="filters">
//       <h2>Filters</h2>
//       <ul className="boxes">
//         <li>
//           <input type="checkbox" id="price-checkbox" />
//           <label htmlFor="price-checkbox">Price</label>
//         </li>
//         <li>
//           <input type="checkbox" id="brand-checkbox" />
//           <label htmlFor="brand-checkbox">Brand</label>
//         </li>
//         <li>
//           <input type="checkbox" id="concern-checkbox" />
//           <label htmlFor="concern-checkbox">Concern</label>
//         </li>
//         <li>
//           <input type="checkbox" id="recommended-checkbox" />
//           <label htmlFor="recommended-checkbox">Recommended</label>
//         </li>
//       </ul>
//     </section>
//   );
// }

// export default Filters;


// const ProductPage = () => {
//   const [products, setProducts] = useState([
//     // ... (products array as defined in your application)
//   ]);

//   const [sortByPrice, setSortByPrice] = useState(false);

//   const handlePriceCheckboxChange = () => {
//     setSortByPrice(!sortByPrice);
//   };

//   return (
//     <div>
//       <section className="filters">
//         <h2>Filters</h2>
//         <ul className="boxes">
//           <li>
//             <input
//               type="checkbox"
//               id="price-checkbox"
//               onChange={handlePriceCheckboxChange}
//               checked={sortByPrice}
//             />
//             <label htmlFor="price-checkbox">Price</label>
//           </li>
//           {/* Other checkboxes */}
//         </ul>
//       </section>
//       <ProductCards products={products} sortByPrice={sortByPrice} />
//     </div>
//   );
// };

// export default ProductPage;