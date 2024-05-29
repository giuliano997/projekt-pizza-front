import React, { useState, useEffect } from "react";
import "./css/global.css";
import { useParams, useHistory } from "react-router-dom";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const history = useHistory();

  useEffect(() => {
    fetch(`/api/pizzas/${id}`)
      .then((response) => response.json())
      .then((data) => setPizza(data));
  }, [id]);

  const handleAddToCart = () => {
    addToCart(pizza);
    history.push("/cart");
  };

  if (!pizza) return <div>Loading...</div>;

  return (
    <div className="product-details">
      <img src={pizza.image} alt={pizza.name} />
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p className="price">{pizza.price} €</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
