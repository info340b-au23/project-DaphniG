import React, { useState, useEffect } from 'react';
import ProductCards from './ProductCards';
import skinCareData from '../skincare.json';
import { useLocation } from 'react-router-dom';

const ProductPage = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedType = searchParams.get('type');
  const [sortByPrice, setSortByPrice] = useState(false);
  const [sortAlphabetically, setSortAlphabetically] = useState(false);
  const [productsData, setProductsData] = useState([]);
  const [filteredProductType, setFilteredProductType] = useState(null);

  useEffect(() => {
    const filtered = selectedType
      ? skinCareData.filter(
          (product) => product.product_type.toLowerCase() === selectedType.toLowerCase()
        )
      : skinCareData;

    setFilteredProducts(filtered);
  }, [selectedType]);


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

      {/* <section className="product-type-buttons">
        <button onClick={() => filterByType('Cleanser')}>Cleanser</button>
        <button onClick={() => filterByType('Toner')}>Toner</button>
      </section> */}

      <ProductCards
        // products={productsData}
        products={filteredProducts}
        sortByPrice={sortByPrice}
        sortAlphabetically={sortAlphabetically}
        // filteredProductType={filteredProductType} // Pass the filtered product type to ProductCards
      />
    </div>
  );
};

export default ProductPage;
