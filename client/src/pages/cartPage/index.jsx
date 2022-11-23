import React from "react";
import "./index.css";
import ModalComp from "../../componets/Modal/Modal";
import Fade from "react-reveal/Fade";
const CartPage = ({ CartItems, handelRemoveFromCart }) => {
  return (
    <>
      <div className="App-main__cartPage">
        <h1>Cart Page</h1>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">image</th>
              <th scope="col">name</th>
              <th scope="col">description</th>
              <th>quantity</th>
              <th scope="col">price</th>
              <th scope="col">remove</th>
            </tr>
          </thead>
          <tbody>
            {CartItems.map((item) => {
              return (
                <>
                  <Fade left cascade>
                    <tr>
                      <th scope="row">{item.id}</th>
                      <td>
                        <img src={item.image} alt="" />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      <td>{item.qty}</td>
                      <td>
                        <span
                          className="
                        badge  bg-success"
                        >
                          {item.price * item.qty}{" "}
                          <i class="fa-solid fa-dollar-sign"></i>
                        </span>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => handelRemoveFromCart(item)}
                        >
                          Remove <i class="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </Fade>
                </>
              );
            })}
          </tbody>
        </table>

        <div className="row  total_price my-3">
          <div className="col-lg-6">
            total price :{" "}
            <span className=" badge  bg-success">
              {CartItems.reduce((a, c) => a + c.price * c.qty, 0)}{" "}
              <i class="fa-solid fa-dollar-sign"></i>
            </span>
          </div>
          <div className="col-lg-6">
            <ModalComp />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
