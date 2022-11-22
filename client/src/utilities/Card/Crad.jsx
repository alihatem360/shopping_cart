import React from "react";
const Card_Utilitie = ({ product }) => {
  return (
    <>
      <div class="card" className="bg-secondary m-2 ">
        <img src={product.image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{product.name}</h5>
          <h6 class="card-text">{product.description}</h6>

          <div
            className="row"
            style={{
              padding: "0px",
              margin: "0px",
            }}
          >
            <div className="col-6">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Size</option>

                {product.size.map((x) => (
                  <option value="1">{x}</option>
                ))}
              </select>
            </div>
            <div className="col-6">
              <span class="btn btn-warning w-100 ">{product.price}</span>
            </div>
          </div>
          {/* add to Card buuton */}
          <div className="row">
            <div className="col-12">
              <button className="btn btn-success w-100">Add to Card</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card_Utilitie;
