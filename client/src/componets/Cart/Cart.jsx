import React from "react";
import "../../css/Cart/Cart.css";
const CartComponent = ({ CartItemsSize }) => {
  return (
    <>
      <div className="App-main__cart_component">
        <span className="position-relative">
          <i class="fa-solid fa-cart-shopping"></i>
          {/* // number of items in cart */}
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {CartItemsSize}
          </span>
        </span>
      </div>
    </>
  );
};

export default CartComponent;
