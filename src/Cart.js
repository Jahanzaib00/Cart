import React from "react";
import "./App.css";
import Modal from "./Modal";
import { useGlobalContext } from "./Context";

export const Cart = () => {
  const { products, Remove_Product, Open_Modal, modal } = useGlobalContext();
  const total = products.reduce((accumulator, element) => {
    return accumulator + element.price;
  }, 0);
  if (products.length === 0) {
    return <h2 className="text-center">Cart Is Empty</h2>;
  } else {
    return (
      <>
        <h1 className="text-center m-5">Cart</h1>
        <h2 className="text-center">Total Bill = {total}</h2>
        <div className="container product-container">
          {products.map((prod) => {
            return (
              <div className="single-product">
                <div className="card" style={{ width: "18rem" }}>
                  <img className="card-img-top" src={prod.image} alt="" />
                  <div className="card-body">
                    <h5 className="card-title">{prod.name}</h5>
                    <h6 className="card-text text-danger">Rs {prod.price}</h6>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <button
                      className="btn btn-danger"
                      onClick={() => Remove_Product(prod)}
                    >
                      Remove From Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {products.length !== 0 && (
          <div className="text-center m-3">
            <button className="btn btn-danger" onClick={() => Open_Modal()}>
              Clear Cart
            </button>
          </div>
        )}
        {modal && <Modal />}
      </>
    );
  }
};
