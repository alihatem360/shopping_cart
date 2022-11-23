import React, { useState } from "react";

const ModalComp = () => {
  const [formValues, setFormValues] = useState("");
  const HashChangeEvent = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    console.log(formValues, "formValues");
  };
  return (
    <>
      <button
        type="button"
        class="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Checkout <i class="fa-solid fa-shopping-cart"></i>
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="recipient-name"
                    placeholder="Email"
                    name="email"
                    onChange={HashChangeEvent}
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    placeholder="Name"
                    name="name"
                    onChange={HashChangeEvent}
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalComp;
