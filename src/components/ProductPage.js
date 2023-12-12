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

  const handleSortByPriceChange = () => {
    setSortByPrice(true);
    setSortAlphabetically(false);
  };

  const handleSortAlphabeticallyChange = () => {
    setSortAlphabetically(true);
    setSortByPrice(false);
  };

  return (
    <div>
      <section className="filters">
        <h2>Filters</h2>
        <ul className="boxes">
          <li>
            <input
              type="radio"
              id="price-radio"
              name="sortType"
              onChange={handleSortByPriceChange}
              checked={sortByPrice}
            />
            <label htmlFor="price-radio">Sort by Price</label>
          </li>
          <li>
            <input
              type="radio"
              id="alpha-radio"
              name="sortType"
              onChange={handleSortAlphabeticallyChange}
              checked={sortAlphabetically}
            />
            <label htmlFor="alpha-radio">Sort Alphabetically</label>
          </li>
        </ul>
      </section>

      <ProductCards
        products={filteredProducts}
        sortByPrice={sortByPrice}
        sortAlphabetically={sortAlphabetically}
      />
    </div>
  );
};

export default ProductPage;
