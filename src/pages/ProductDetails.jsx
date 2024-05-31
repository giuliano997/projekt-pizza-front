import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/pizzas/${id}`)
      .then((response) => {
        setPizza(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the pizza details!", error);
      });
  }, [id]);

  const handleAddToCart = () => {
    addToCart(pizza);
    navigate("/cart");
  };

  return (
    <div>
      {pizza ? (
        <div>
          <h1>{pizza.name}</h1>
          <p>{pizza.description}</p>
          <p>Price: ${pizza.price}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
          <button onClick={() => navigate("/products")}>
            Back to Product List
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductDetails;
