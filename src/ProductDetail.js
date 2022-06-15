import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "./Context";
export const ProductDetail = () => {
  const { id } = useParams();
  const { data } = useGlobalContext();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const product = data.find((prod) => prod.id === id);
    setProduct(product);
    console.log(product);
  }, [data, id]);

  return (
    <div>
      <div className="card">
        <img class="card-img-top" src={product.image} alt="" />
        <div className="card-body">
          <h5 className="card-title text-capitalize ">
            <span>{product.name}</span>
            <span className="float-right text-danger">Rs {product.price}</span>
          </h5>
          <p className="card-text">{product.description}</p>
          <Link to="/products" className="card-link">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};
