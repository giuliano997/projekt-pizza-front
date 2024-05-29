// frontend/src/components/Cart.jsx
import React from "react";
import "./css/global.css";

const Cart = ({ cart }) => (
  <div className="cart">
    <h2>Cart</h2>
    {cart.length === 0 ? (
      <p>Cart is empty</p>
    ) : (
      cart.map((item) => (
        <div className="cart-item" key={item._id}>
          <h2>{item.name}</h2>
          <p className="price">{item.price} €</p>
        </div>
      ))
    )}
  </div>
);

export default Cart;
