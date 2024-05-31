import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    navigate("/products");
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Benutzername"
        />
        <button type="submit">Login</button>
      </form>
    </header>
  );
}
