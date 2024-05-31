import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductList() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/pizzas")
      .then((response) => {
        setPizzas(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the pizzas!", error);
      });
  }, []);

  return (
    <div>
      <h1>Unsere Pizzen</h1>
      <ul>
        {pizzas.map((pizza) => (
          <li key={pizza._id}>
            <Link to={`/products/${pizza._id}`}>{pizza.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
