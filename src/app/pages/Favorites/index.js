import React from 'react';
import './index.scss';
import { ProductCard } from '../../components';

function Favorites({ favorites, products }) {
  return (
    <div className="Favorites">
      {products
        .filter(product => favorites.includes(product.id))
        .map(data => (
          <ProductCard {...data} key={data.id} />
        ))}
    </div>
  );
}

export default Favorites;
