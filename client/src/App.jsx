import React, { useState } from "react";
import "./App.css";
import Header from "./componets/Header/Header";
import Footer from "./componets/Footer/Footer";
import CartComponent from "./componets/Cart/Cart";
import CartPage from "./pages/cartPage";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage/main";
function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
