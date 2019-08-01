import React from 'react';
import { connect } from 'react-redux';
import './index.scss';
import { Loader, ProductCard } from '../../components';
import shop from '../../../shop';

function Products({ isLoading, error, products = [] }) {
  return (
    <div className="Products">
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {products.map(data => {
        return <ProductCard {...data} key={data.id} />;
      })}
    </div>
  );
}

function mapStateToProps(state) {
  return { products: shop.selectors.getProducts(state) };
}

export default connect(mapStateToProps)(Products);
