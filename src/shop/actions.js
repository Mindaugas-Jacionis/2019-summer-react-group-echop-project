import { API } from '../constants';
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

export const getProducts = () => async dispatch => {
  let finalFinal = null;
  dispatch({ type: types.GET_PRODUCTS });

  try {
    const result = await fetch(API.getProducts);
    finalFinal = await result.json();

    dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: finalFinal });
  } catch (error) {
    dispatch({
      type: types.GET_PRODUCTS_FAILURE,
      payload: 'Ooops! Monkeys stole our products! 😱👟',
    });
  }

  return finalFinal;
};
