import React from "react";
import "../../css/Header/Header.css";
import { words } from "../../data/words";
import { Link } from "react-router-dom";
import CartComponent from "../Cart/Cart";
const Header = ({ CartItemsSize }) => {
  return (
    <>
      <header>
        <h1>
          <Link to="/">
            {words.headerTitle} <i class="fa-brands fa-shopify"></i>
          </Link>
        </h1>
        <Link to="/cart">
          <CartComponent CartItemsSize={CartItemsSize} />
        </Link>
      </header>
    </>
  );
};

export default Header;
