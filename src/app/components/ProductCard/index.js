import React from 'react';
import './index.scss';

function ProductCard({ name, image, description, price, currencySymbol }) {
  return (
    <div className="ProductCard">
      <div className="ProductCard--image">
        <img alt={`product: ${name}`} src={image} />
      </div>
      <div className="ProductCard--info">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="ProductCard--cta">
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
  );
}

export default ProductCard;
