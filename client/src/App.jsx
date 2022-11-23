import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./componets/Header/Header";
import Footer from "./componets/Footer/Footer";
import CartComponent from "./componets/Cart/Cart";
import CartPage from "./pages/cartPage";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage/main";
import data from "./data/data.json";

function App() {
  const [CartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("CartItems")) || []
  );
  const [CartItemsSize, setCartItemsSize] = useState(
    JSON.parse(localStorage.getItem("CartItemsSize")) || 0
  );

  const handelAddToCart = (product) => {
    const productClone = [...CartItems];
    const productIndex = productClone.findIndex(
      (item) => item.id === product.id
    );

    if (productIndex === -1) {
      productClone.push({ ...product, qty: 1 });
    } else {
      productClone[productIndex].qty++;
    }
    // setCartItems(productClone) // this is the same as the next line
    setCartItems(productClone);
    // setCartItemsSize(CartItemsSize + 1);
    setCartItemsSize(productClone.reduce((total, item) => total + item.qty, 0));
  };

  const handelRemoveFromCart = (product) => {
    const productClone = [...CartItems];
    const productIndex = productClone.findIndex(
      (item) => item.id === product.id
    );
    console.log(productIndex, "productIndex");
    if (productIndex === -1) {
      productClone.push({ ...product, qty: 1 });
    } else {
      productClone[productIndex].qty--;
      if (productClone[productIndex].qty === 0) {
        productClone.splice(productIndex, 1);
      }
    }
    setCartItems(productClone);
    setCartItemsSize(productClone.reduce((total, item) => total + item.qty, 0));
  };

  useEffect(() => {
    localStorage.setItem("CartItems", JSON.stringify(CartItems));
    localStorage.setItem("CartItemsSize", JSON.stringify(CartItemsSize));
  }, [CartItems, CartItemsSize]);
  return (
    <>
      <div className="App">
        <Header CartItemsSize={CartItemsSize} />
        <Routes>
          <Route
            path="/"
            element={<MainPage handelAddToCart={handelAddToCart} />}
          />
          <Route
            path="/cart"
            element={
              <CartPage
                CartItems={CartItems}
                handelRemoveFromCart={handelRemoveFromCart}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
