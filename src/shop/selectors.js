export const getProducts = state => state.shop.products;
export const getFavorites = state => state.shop.favorites;
export const getCart = state => state.shop.cart;

export const getCartProducts = state => {
  const { cart, products } = state.shop;
  const cartProducts = cart.map(item => {
    const product = products.find(({ id }) => id === item.id);

    return { ...product, ...item };
  });

  return cartProducts;
};

export const getCartItem = (state, id) => {
  const { cart } = state.shop;
  return cart.find(item => item.id === id);
};

export const isProductFavorite = (state, id) => state.shop.favorites.includes(id);
