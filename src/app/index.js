import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Products, PageNotFound, Cart, Favorites, SingleProduct } from './pages';
import { Layout } from './components';
import { useFetch } from './hooks';
import store from './state';
import { ROUTES } from '../constants';
import shop from '../shop';

function onError() {
  return 'Ooops! Monkeys stole our products! 😱👟';
}

function onSuccess(payload) {
  store.dispatch(shop.actions.setProducts(payload));

  return payload;
}

function App() {
  const { loading: isLoading, error } = useFetch({
    onError,
    onSuccess,
    src: 'https://boiling-reaches-93648.herokuapp.com/food-shop/products',
    initialState: [],
    dataKey: 'products',
  });

  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            <Route
              path={ROUTES.defaultPage}
              exact
              render={() => <Products isLoading={isLoading} error={error} />}
            />
            <Route path={ROUTES.cart} exact component={Cart} />
            <Route path={ROUTES.favorites} exact component={Favorites} />
            <Route
              path={ROUTES.product}
              exact
              render={props => <SingleProduct {...props} isLoading={isLoading} />}
            />
            <Redirect exact from={ROUTES.home} to={ROUTES.defaultPage} />
            <Route component={PageNotFound} />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
