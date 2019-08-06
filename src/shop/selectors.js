import { MODULE_NAME } from './constants';

export const getProducts = state => state[MODULE_NAME].products.data;
export const isLoadingProducts = state => state[MODULE_NAME].products.loading;
export const getProductsError = state => state[MODULE_NAME].products.error;

export const getFavorites = state => state[MODULE_NAME].favorites;
export const getCart = state => state[MODULE_NAME].cart;

export const getProductById = (state, id) => getProducts(state).find(product => product.id === id);

export const getCartProducts = state => {
  const cartProducts = getCart(state).map(item => {
    const product = getProducts(state).find(({ id }) => id === item.id);

    return { ...product, ...item };
  });

  return cartProducts;
};

export const getFavoriteProducts = state => {
  const favoriteProducts = getProducts(state).filter(product =>
    getFavorites(state).includes(product.id),
  );

  return favoriteProducts;
};

export const getCartItem = (state, id) => getCart(state).find(item => item.id === id);

export const isProductFavorite = (state, id) => getFavorites(state).includes(id);
