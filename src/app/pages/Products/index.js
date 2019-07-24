import React from 'react';
import './index.scss';
import { Loader, ProductCard } from '../../components';

function Products({ isLoading, error, products = [], favorites, toggleFavorite, addToCart }) {
  return (
    <div className="Products">
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {products.map(data => (
        <ProductCard
          toggleFavorite={toggleFavorite}
          addToCart={addToCart}
          {...data}
          key={data.id}
          isFavorite={favorites.includes(data.id)}
        />
      ))}
    </div>
  );
}

export default Products;
