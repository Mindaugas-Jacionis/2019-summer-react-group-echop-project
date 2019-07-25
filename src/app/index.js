import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Products, PageNotFound, Cart, Favorites } from './pages';
import { Layout } from './components';

class App extends React.Component {
  state = {
    products: [],
    favorites: [],
    cart: [],
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

  toggleFavorite = id => {
    const { favorites } = this.state;

    if (favorites.includes(id)) {
      this.setState({ favorites: favorites.filter(favoriteId => favoriteId !== id) });
    } else {
      this.setState({ favorites: [...favorites, id] });
    }
  };

  addToCart = addId => {
    this.setState(state => {
      const itemIndex = state.cart.findIndex(({ id }) => id === addId);

      if (itemIndex > -1) {
        return {
          cart: state.cart.map((cartItem, i) =>
            i === itemIndex ? { ...cartItem, count: cartItem.count + 1 } : cartItem,
          ),
        };
      }

      return { cart: [...state.cart, { id: addId, count: 1 }] };
    });
  };

  removeFromCart = removeId => {
    this.setState(state => {
      return { cart: state.cart.filter(({ id }) => id !== removeId) };
    });
  };

  render() {
    const { products, isLoading, error, favorites, cart } = this.state;

    return (
      <Router>
        <Layout>
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <Products
                  toggleFavorite={this.toggleFavorite}
                  addToCart={this.addToCart}
                  removeFromCart={this.removeFromCart}
                  products={products}
                  cart={cart}
                  favorites={favorites}
                  isLoading={isLoading}
                  error={error}
                />
              )}
            />
            <Route path="/cart" exact render={() => <Cart cart={cart} products={products} />} />
            <Route
              path="/favorites"
              exact
              render={() => (
                <Favorites
                  toggleFavorite={this.toggleFavorite}
                  removeFromCart={this.removeFromCart}
                  addToCart={this.addToCart}
                  favorites={favorites}
                  products={products}
                  cart={cart}
                />
              )}
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
