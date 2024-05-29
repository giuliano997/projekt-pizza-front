// frontend/src/components/ProductList.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css"; // Füge dies hinzu, um das CSS zu importieren

const ProductList = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("/api/pizzas")
      .then((response) => response.json())
      .then((data) => setPizzas(data));
  }, []);

  return (
    <div className="product-list">
      {pizzas.map((pizza) => (
        <div className="product-card" key={pizza._id}>
          <Link to={`/products/${pizza._id}`}>
            <img src={pizza.image} alt={pizza.name} />
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>
            <p className="price">{pizza.price} €</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
