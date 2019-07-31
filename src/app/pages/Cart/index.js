import React from 'react';
import { connect } from 'react-redux';
import './index.scss';

function Error() {
  return (
    <p>
      Ohhh, no! You don't have anything in your cart{' '}
      <span role="img" aria-label="crying face emoji">
        😢
      </span>
    </p>
  );
}

function CartHeader() {
  return (
    <div className="Cart--header">
      <label>Product:</label>
      <label>Price:</label>
    </div>
  );
}

function Total({ total }) {
  return (
    <div className="Cart--total">
      <label>Total:</label> {total}
    </div>
  );
}

function CartRow({ name, count, price, currencySymbol }) {
  return (
    <div className="Cart--item">
      <span>
        {name} x {count}
      </span>
      <span>
        {price * count}
        {currencySymbol}
      </span>
    </div>
  );
}

function Cart({ cart, total }) {
  return (
    <div className="Cart">
      {!cart.length && <Error />}
      {!!cart.length && <CartHeader />}
      {cart.map(item => (
        <CartRow {...item} key={item.id} />
      ))}
      {!!cart.length && <Total total={total} />}
    </div>
  );
}

function mapStateToProps(state) {
  const { cart, products } = state.shop;
  const cartItems = cart.map(item => {
    const product = products.find(({ id }) => id === item.id);

    return { ...product, ...item };
  });
  const total = cartItems.reduce((result, { price, count }) => result + Number(price) * count, 0);

  return { cart: cartItems, total };
}

export default connect(mapStateToProps)(Cart);
