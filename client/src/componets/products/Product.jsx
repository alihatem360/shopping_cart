import React, { useEffect } from "react";
import "./../../css/products/product.css";
import Card_Utilitie from "../../utilities/Card/Crad";

//use require to import the module
// const Fade = require("react-reveal/Fade");

// connect to redux
import { connect } from "react-redux";
import { fetchProducts } from "../../Store/actions/products";

const Product = (props) => {
  useEffect(() => {
    props.fetchProducts();
  }, []);

  return (
    <>
      {/* <Fade left cascade> */}
      <div className="App-main__products">
        <div className="row">
          {props.NotFound ? (
            <div className="col-12">
              <h1 className="text-center">
                <span class="badge bg-danger mt-3">{props.size} Not Found</span>
              </h1>
            </div>
          ) : (
            ""
          )}
          {props.FilterProducts.length > 0
            ? props.FilterProducts.map((product, index) => {
                return (
                  <div className="col-12 col-md-6 col-lg-4">
                    <Card_Utilitie product={product} />
                  </div>
                );
              })
            : props.productsFromRedux && props.productsFromRedux.length > 0
            ? props.productsFromRedux.map((product, index) => {
                return (
                  <div className="col-12 col-md-6 col-lg-4">
                    <Card_Utilitie
                      product={product}
                      handelAddToCart={props.handelAddToCart}
                    />
                  </div>
                );
              })
            : "loading"}
        </div>
      </div>
      {/* </Fade> */}
    </>
  );
};

// export default Product;

export default connect(
  (state) => {
    return {
      productsFromRedux: state.products.filterProducts,
    };
  },
  { fetchProducts }
)(Product);

// export default connect(
//   (state) => ({
//     productss: state.products.products,
//     // FilterProducts: state.FilterProducts,
//     // NotFound: state.NotFound,
//     // size: state.size,
//   }),
//   { fetchProducts }
// )(Product);
