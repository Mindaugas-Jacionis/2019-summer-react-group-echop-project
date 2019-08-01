import React from 'react';
import { connect } from 'react-redux';
import './index.scss';
import { ProductCard } from '../../components';
import shop from '../../../shop';

function Error() {
  return (
    <p>
      Ohhh, no! You don't have favorites{' '}
      <span role="img" aria-label="broken heart emoji">
        💔
      </span>
    </p>
  );
}

function Favorites({ favorites, ...restProps }) {
  return (
    <div className="Favorites">
      {!favorites.length && <Error />}
      {favorites.map(data => {
        return <ProductCard {...restProps} {...data} key={data.id} />;
      })}
    </div>
  );
}

function mapStateToProps(state) {
  return { favorites: shop.selectors.getFavoriteProducts(state) };
}

export default connect(mapStateToProps)(Favorites);
