import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";

function ProductList() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/pizzas")
      .then((response) => {
        setPizzas(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error("There was an error fetching the pizzas!", error);
      });
  }, []);

  return (
    <div className="product-list">
      <h1>Unsere Pizzen</h1>
      <div className="grid-container">
        {pizzas.map((pizza) => (
          <div key={pizza._id} className="grid-item">
            <Link to={`/products/${pizza._id}`}>
              <img src={pizza.image} alt={pizza.title} />
              <p>{pizza.title}</p>
            </Link>
            <p>{pizza.price}€</p>
            <p>{pizza.ingredients.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
