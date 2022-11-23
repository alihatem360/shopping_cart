import React from "react";
import "../../css/Header/Header.css";
import { words } from "../../../words";
import { Link } from "react-router-dom";
import CartComponent from "../Cart/Cart";
const Header = () => {
  return (
    <>
      <header>
        <h1>
          {words.headerTitle} <i class="fa-brands fa-shopify"></i>
        </h1>
        <Link to="/cart">
          <CartComponent />
        </Link>
      </header>
    </>
  );
};

export default Header;
