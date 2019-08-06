import * as actionTypes from './actionTypes';
import { toggleArrayItem } from '../util';

const INITIAL_PRODUCTS_STATE = {
  data: [],
  error: null,
  loading: false,
};

const INITIAL_STATE = {
  products: INITIAL_PRODUCTS_STATE,
  favorites: [],
  cart: [],
};

function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case actionTypes.GET_PRODUCTS:
      return {
        ...state,
        products: { ...INITIAL_PRODUCTS_STATE, loading: true },
      };
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: { ...INITIAL_PRODUCTS_STATE, data: payload },
      };
    case actionTypes.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        products: { ...INITIAL_PRODUCTS_STATE, error: payload },
      };

    case actionTypes.ADD_TO_CART:
      const itemIndex = state.cart.findIndex(({ id }) => id === payload.id);

      if (itemIndex > -1) {
        return {
          ...state,
          cart: state.cart.map((item, i) => (i === itemIndex ? payload : item)),
        };
      }

      return { ...state, cart: [...state.cart, payload] };
    case actionTypes.REMOVE_FROM_CART:
      return { ...state, cart: state.cart.filter(({ id }) => id !== payload) };

    case actionTypes.TOGGLE_FAVORITE:
      return {
        ...state,
        favorites: toggleArrayItem(state.favorites, payload),
      };
    default:
      return state;
  }
}

export default reducer;
