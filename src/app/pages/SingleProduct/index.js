import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './index.scss';
import { ROUTES } from '../../../constants';
import { Loader } from '../../components';
import shop from '../../../shop';

function SingleProduct({ history, product, isLoading }) {
  if (!product && !isLoading) {
    return <Redirect to={ROUTES.defaultPage} />;
  }

  if (isLoading) {
    return <Loader />;
  }

  const { name, image, description, price, currencySymbol } = product;
  const onClick = () => history.push(ROUTES.cart);

  return (
    <div className="SingleProduct">
      <img src={image} alt={`product: ${name}`} />
      <p>
        {name} - {price}
        {currencySymbol}
      </p>
      <p>{description}</p>
      <button type="button" onClick={onClick}>
        Go to Cart
      </button>
    </div>
  );
}

function mapStateToProps(
  state,
  {
    match: {
      params: { id },
    },
  },
) {
  return { product: shop.selectors.getProductById(state, id) };
}

export default connect(mapStateToProps)(SingleProduct);
