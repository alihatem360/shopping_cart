import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";

export const addToCart = (product) => {
  return (dispatch, getState) => {
    const cartItems = getState().cart.cartItems;
    const cartItemsClone = [...cartItems];
    let isProductExists = false;
    cartItemsClone.forEach((p) => {
      if (p._id === product._id) {
        p.qty++;
        isProductExists = true;
      }
    });
    if (!isProductExists) {
      cartItemsClone.push({ ...product, qty: 1 });
    }
    dispatch({
      type: ADD_TO_CART,
      data: { cartItems: cartItemsClone },
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItemsClone));
  };
};
