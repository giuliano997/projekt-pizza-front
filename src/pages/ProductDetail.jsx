import React from "react";
import ProductDetails from "../components/ProductDetails";

const ProductDetail = ({ addToCart }) => (
  <div>
    <ProductDetails addToCart={addToCart} />
  </div>
);

export default ProductDetail;
