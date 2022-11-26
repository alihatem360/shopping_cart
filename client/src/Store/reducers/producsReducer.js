import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_SIZE,
  FILTER_PRODUCTS_BY_PRICE,
} from "../actions/types";

export const productReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { products: action.data, filterProducts: action.data };
    case FILTER_PRODUCTS_BY_SIZE:
      return {
        ...state,
        size: action.data.size,
        filterProducts: action.data.products,
      };
    case FILTER_PRODUCTS_BY_PRICE:
      return {
        ...state,
        sort: action.data.sort,
        filterProducts: action.data.products,
      };
    default:
      return state;
  }
};
