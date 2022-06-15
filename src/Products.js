import React from "react";
import "./App.css";
import SingleProduct from "./SingleProduct";
import { useGlobalContext } from "./Context";

const Products = () => {
  const { data } = useGlobalContext();
  return (
    <>
      <h2 className="text-center m-5">Products</h2>
      <div className="container product-container">
        {data.map((item) => {
          return (
            <div className="single-product" key={item.id}>
              <SingleProduct {...item} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
