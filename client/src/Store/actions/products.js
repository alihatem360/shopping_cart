import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_SIZE,
  FILTER_PRODUCTS_BY_PRICE,
} from "./types";

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

// filter product by size
export const filterProductsbySize = (products, value) => {
  return (dispatch) => {
    let productsClone = [...products];
    let newProducts = productsClone.filter((p) => p.size.indexOf(value) !== -1);

    dispatch({
      type: FILTER_PRODUCTS_BY_SIZE,
      data: {
        size: value,
        products: value === "All" ? products : newProducts,
      },
    });
  };
};

// filter product by price

export const filterProductsByPrice = (products, value) => {
  return (dispatch) => {
    let productClone = [...products];
    if (value === "Lowest") {
      productClone.sort((a, b) => a.price - b.price);
    } else if (value === "Highest") {
      productClone.sort((a, b) => b.price - a.price);
    } else if (value === "Latest") {
      productClone.sort((a, b) => a.id < b.id);
    }

    dispatch({
      type: FILTER_PRODUCTS_BY_PRICE,
      data: {
        sort: value,
        products: productClone,
      },
    });
  };
};
