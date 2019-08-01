import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './index.scss';
import shop from '../../../shop';

function ProductCard({
  name,
  image,
  description,
  price,
  currencySymbol,
  id,
  isFavorite,
  cartCount,
  toggleFavorite,
  addToCart,
  removeFromCart,
}) {
  const className = isFavorite ? 'ProductCard ProductCard__favorite' : 'ProductCard';

  return (
    <div className={className}>
      <div className="ProductCard--image">
        <img alt={`product: ${name}`} src={image} />
      </div>
      <div className="ProductCard--info">
        <Link to={`/product/${id}`}>
          <h3>{name}</h3>
        </Link>
        <p>{description}</p>
      </div>
      <div className="ProductCard--cta">
        <p>
          <span>Price:</span> <span>{`${price}${currencySymbol}`}</span>
        </p>
        <div>
          <button type="button" onClick={toggleFavorite}>
            <span role="img" aria-label="add to favorites heart illustration">
              {isFavorite ? '❌' : '💜'}
            </span>
          </button>
          {!!cartCount && (
            <button type="button" onClick={removeFromCart}>
              <span role="img" aria-label="remove from cart illustration">
                🗑️
              </span>
            </button>
          )}
          <button type="button" onClick={() => addToCart(cartCount)}>
            <span role="img" aria-label="add to cart illustration">
              🛒
            </span>
            {!!cartCount && <div className="ProductCard--cta-count">{cartCount}</div>}
          </button>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state, { id }) {
  const item = shop.selectors.getCartItem(state, id);

  return {
    cartCount: item ? item.count : 0,
    isFavorite: shop.selectors.isProductFavorite(state, id),
  };
}

function mapDispatchToProps(dispatch, { id }) {
  return {
    addToCart: count =>
      dispatch({
        type: shop.actionTypes.ADD_TO_CART,
        payload: { id, count: count + 1 },
      }),
    removeFromCart: () =>
      dispatch({
        type: shop.actionTypes.REMOVE_FROM_CART,
        payload: id,
      }),
    toggleFavorite: () =>
      dispatch({
        type: shop.actionTypes.TOGGLE_FAVORITE,
        payload: id,
      }),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductCard);
