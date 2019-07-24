import React from 'react';
import './index.scss';
import { ProductCard } from '../../components';

function Favorites({ favorites, products = [], toggleFavorite, addToCart }) {
  const favoriteProducts = products.filter(product => favorites.includes(product.id));

  return (
    <div className="Favorites">
      {!favoriteProducts.length && (
        <p>
          Ohhh, no! You don't have favorites{' '}
          <span role="img" aria-label="broken heart emoji">
            💔
          </span>
        </p>
      )}
      {favoriteProducts.map(data => (
        <ProductCard
          {...data}
          key={data.id}
          toggleFavorite={toggleFavorite}
          addToCart={addToCart}
          isFavorite
        />
      ))}
    </div>
  );
}

export default Favorites;
