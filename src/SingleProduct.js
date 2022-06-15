import React, { useState, useEffect, useRef } from "react";
import { useGlobalContext } from "./Context";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const SingleProduct = (prod) => {
  const { products, Add_Product, Remove_Product } = useGlobalContext();
  const { id, name, price, image, description } = prod;
  const [isClicked, setIsClicked] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const button = useRef(null);
  const handleSubmit = (prod) => {
    if (isClicked) {
      Remove_Product(prod);
    } else if (!isClicked) {
      Add_Product(prod);
    }
    setIsClicked((prevCheck) => !prevCheck);
    button.current.className = `btn ${
      !isClicked ? "btn-danger" : "btn-primary"
    }`;
  };
  useEffect(() => {
    products.map(
      (prod) =>
        prod.id === id && (
          <>
            {
              ((button.current.className = "btn btn-danger"),
              setIsClicked(true))
            }
          </>
        )
    );
  }, [id, products]);
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <Link to={`/products/${id}`}>
          <img className="card-img-top" src={image} alt="" />
        </Link>
        <div className="card-body">
          <h5 className="card-title text-capitalize">{name}</h5>
          <p class="card-text">
            {showInfo ? description : `${description.substring(0, 50)}...`}
            <p
              className="btn text-primary"
              onClick={() => setShowInfo(!showInfo)}
            >
              {showInfo ? "show less" : "show more"}
            </p>
          </p>
          <h5 className="card-text">Rs {price}</h5>
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-primary"
              ref={button}
              onClick={() => handleSubmit(prod)}
            >
              {isClicked ? "Remove From Cart" : "Add To Cart"}
            </button>
            {isClicked && (
              <Link to="/cart" className="btn" style={{ "font-size": "20px" }}>
                <FaShoppingCart />
                <span style={{ "font-size": "14px" }}>{products.length}</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
