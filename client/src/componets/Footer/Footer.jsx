import React from "react";
import "./../../css/Footer/Footer.css";
import { words } from "../../../words";
const Footer = () => {
  return (
    <>
      <footer>
        <h1>
          <i class="fa-regular fa-registered"></i> {words.footerTitle}{" "}
        </h1>
      </footer>
    </>
  );
};

export default Footer;
