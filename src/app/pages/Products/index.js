import React from 'react';
import './index.scss';
import { Loader } from '../../components';

function Products({ isLoading, error, products = [] }) {
  return (
    <div className="Products">
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {products.map(({ name, image, price, currencySymbol, description, id }) => (
        <div key={id} className="Product">
          <div className="Product--image">
            <img alt={`product: ${name}`} src={image} />
          </div>
          <div className="Product--info">
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
          <div className="Product--cta">
            <p>
              <span>Price:</span> <span>{`${price}${currencySymbol}`}</span>
            </p>
            <div>
              <button type="button" onClick={() => console.log('Add to Favorites', name)}>
                <span role="img" aria-label="add to favorites heart illustration">
                  💜
                </span>
              </button>
              <button type="button" onClick={() => console.log('Add to Cart', name)}>
                <span role="img" aria-label="add to cart illustration">
                  🛒
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
