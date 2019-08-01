import { MODULE_NAME } from './constants';

export const getProducts = state => state[MODULE_NAME].products;
export const getFavorites = state => state[MODULE_NAME].favorites;
export const getCart = state => state[MODULE_NAME].cart;

export const getProductById = (state, id) =>
  state[MODULE_NAME].products.find(product => product.id === id);

export const getCartProducts = state => {
  const { cart, products } = state[MODULE_NAME];
  const cartProducts = cart.map(item => {
    const product = products.find(({ id }) => id === item.id);

    return { ...product, ...item };
  });

  return cartProducts;
};

export const getFavoriteProducts = state => {
  const { products, favorites } = state[MODULE_NAME];
  const favoriteProducts = products.filter(product => favorites.includes(product.id));

  return favoriteProducts;
};

export const getCartItem = (state, id) => {
  const { cart } = state[MODULE_NAME];
  return cart.find(item => item.id === id);
};

export const isProductFavorite = (state, id) => state[MODULE_NAME].favorites.includes(id);
