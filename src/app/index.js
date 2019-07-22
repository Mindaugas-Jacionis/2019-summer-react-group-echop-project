import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Products, PageNotFound, Cart, Favorites } from './pages';
import { Layout } from './components';

class App extends React.Component {
  state = {
    products: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const response = await fetch('https://boiling-reaches-93648.herokuapp.com/food-shop/products');

    if (response.ok) {
      const json = await response.json();
      this.setState({ products: json, isLoading: false });
    } else {
      this.setState({ error: 'Ooops! Monkeys stole our products! 😱👟', isLoading: false });
    }
  }

  render() {
    const { products, isLoading, error } = this.state;

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
            <Route path="/favorites" exact component={Favorites} />
            <Route component={PageNotFound} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
