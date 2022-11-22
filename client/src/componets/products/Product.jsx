import React from "react";
import "./../../css/products/product.css";
import Card_Utilitie from "../../utilities/Card/Crad";
const Product = ({ products, FilterProducts, NotFound, size }) => {
  return (
    <>
      <div className="App-main__products">
        <div className="row">
          {NotFound ? (
            <div className="col-12">
              <h1 className="text-center">
                <span class="badge bg-danger mt-3">{size} Not Found</span>
              </h1>
            </div>
          ) : (
            ""
          )}
          {FilterProducts.length > 0
            ? FilterProducts.map((product, index) => {
                return (
                  <div className="col-12 col-md-6 col-lg-4">
                    <Card_Utilitie product={product} />
                  </div>
                );
              })
            : products.map((product, index) => {
                return (
                  <div className="col-12 col-md-6 col-lg-4">
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
