import React from "react";

import "./../../css/Filter/Filter.css";
import Fade from "react-reveal/Fade";
const Filter = (props) => {
  return (
    <>
      <Fade right cascade>
        <div className="filtter-wrapper">
          <h2>Filter title</h2>
          <div className="number-of-products ">
            <span className="badge bg-primary mx-2">
              {props.FilterProductsSize > 0
                ? props.FilterProductsSize
                : props.productSize}{" "}
            </span>
            products found
          </div>
          {/* // filter by size */}
          <div className="row">
            <div className="col-lg-12">
              <div className="filter-by-size">
                <h3>Filter by size</h3>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  onChange={props.handelSizeSelect}
                  value={props.size}
                >
                  <option value="All">All</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </div>
            </div>
          </div>
          {/* // filter by price */}
          <div className="row">
            <div className="col-lg-12">
              <div className="filter-by-price">
                <h3>Filter by price</h3>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  onChange={props.handelSortSelect}
                  value={props.sort}
                >
                  <option value="">Select</option>
                  <option value="Latest">Latest</option>
                  <option value="Lowest">Lowest</option>
                  <option value="Highest">Highest</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Filter;
