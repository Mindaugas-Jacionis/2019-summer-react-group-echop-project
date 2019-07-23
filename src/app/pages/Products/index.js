import React from 'react';
import './index.scss';
import { Loader, ProductCard } from '../../components';

function Products({ isLoading, error, products = [] }) {
  return (
    <div className="Products">
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {products.map(data => (
        <ProductCard {...data} key={data.id} />
      ))}
    </div>
  );
}

export default Products;
