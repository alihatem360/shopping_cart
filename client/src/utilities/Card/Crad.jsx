import React from "react";
import "./Card.css";
const Card_Utilitie = ({ product }) => {
  return (
    <>
      <div class="card" className="bg-secondary m-2 " id="card">
        <img src={product.image} class="card-img-top" alt="..." />
        <div class="card-body">
          <div className="d-flex justify-content-between">
            <h4 class="card-title">{product.name}</h4>
            <span class="badge bg-success">
              {product.price} <i class="fa-solid fa-dollar-sign"></i>
            </span>
          </div>
          <h6 class="card-text">{product.description}</h6>

          <div className="py-2">
            {product.size.map((size, index) => {
              return <span class="badge bg-light mx-1 text-dark">{size}</span>;
            })}
          </div>
          <div className="row">
            <div className="col-12">
              <button className="btn btn-warning w-100">
                Add to Card <i class="fa-solid fa-cart-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card_Utilitie;
