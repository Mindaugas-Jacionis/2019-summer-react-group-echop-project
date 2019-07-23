import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Products, PageNotFound, Cart, Favorites } from './pages';
import { Layout } from './components';

class App extends React.Component {
  state = {
    products: [],
    favorites: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const response = await fetch('https://boiling-reaches-93648.herokuapp.com/food-shop/products');

    if (response.ok) {
      const json = await response.json();
      this.setState({ products: json, favorites: [json[0].id, json[5].id], isLoading: false });
    } else {
      this.setState({ error: 'Ooops! Monkeys stole our products! 😱👟', isLoading: false });
    }
  }

  render() {
    const { products, isLoading, error, favorites } = this.state;

    return (
      <Router>
        <Layout>
          <Switch>
            <Route
              path="/"
              exact
              render={() => <Products products={products} isLoading={isLoading} error={error} />}
            />
            <Route path="/cart" exact component={Cart} />
            <Route
              path="/favorites"
              exact
              render={() => <Favorites favorites={favorites} products={products} />}
            />
            <Redirect exact from="/home" to="/" />
            <Route component={PageNotFound} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
