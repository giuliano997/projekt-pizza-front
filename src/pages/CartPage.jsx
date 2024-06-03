import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Cart({ cart }) {
  const [discountCode, setDiscountCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const navigate = useNavigate();

  const handleDiscountChange = (e) => {
    setDiscountCode(e.target.value);
  };

  const handleApplyDiscount = () => {
    if (discountCode === "xxx10xxx") {
      setDiscountApplied(true);
    } else {
      alert("Ungültiger Rabattcode");
    }
  };

  const calculateTotal = () => {
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    return discountApplied ? total * 0.9 : total;
  };

  return (
    <div>
      <h1>Warenkorb</h1>
      <ul>
        {cart.map((pizza) => (
          <li key={pizza.title}>
            {pizza.title} - {pizza.price.toFixed(2)}€
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={discountCode}
          onChange={handleDiscountChange}
          placeholder="Rabattcode eingeben"
        />
        <button onClick={handleApplyDiscount}>Rabatt anwenden</button>
      </div>
      <h2>Gesamtpreis: ${calculateTotal().toFixed(2)}</h2>
      <button onClick={() => navigate("/products")}>
        Back to Product List
      </button>
    </div>
  );
}

export default Cart;
