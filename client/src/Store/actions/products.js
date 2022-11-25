import { FETCH_PRODUCTS } from "./types";

export const fetchProducts = () => {
  return (dispatch) => {
    fetch("/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: FETCH_PRODUCTS,
          data: data,
        });
      });
  };
};
