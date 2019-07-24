import React from 'react';
import './index.scss';

function ProductCard({
  name,
  image,
  description,
  price,
  currencySymbol,
  id,
  isFavorite,
  toggleFavorite,
  addToCart,
}) {
  const className = isFavorite ? 'ProductCard ProductCard__favorite' : 'ProductCard';

  return (
    <div className={className}>
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
          <button type="button" onClick={() => toggleFavorite(id)}>
            <span role="img" aria-label="add to favorites heart illustration">
              {isFavorite ? '❌' : '💜'}
            </span>
          </button>
          <button type="button" onClick={() => addToCart(id)}>
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
