import * as types from './actionTypes';

export const removeFromCart = id => ({
  type: types.REMOVE_FROM_CART,
  payload: id,
});

export const toggleFavorite = id => ({
  type: types.TOGGLE_FAVORITE,
  payload: id,
});

export const addToCart = payload => ({
  type: types.ADD_TO_CART,
  payload,
});

export const setProducts = payload => ({
  type: types.SET_PRODUCTS,
  payload,
});
