import React from "react";
import "./../../css/products/product.css";
import Card_Utilitie from "../../utilities/Card/Crad";
const Product = ({ products }) => {
  return (
    <>
      <div className="App-main__products">
        <div className="row">
          {products.map((product, index) => {
            return (
              <div key={index} className="col-4 ">
                <Card_Utilitie product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
