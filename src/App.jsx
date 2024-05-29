// frontend/src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import CartPage from "./pages/CartPage";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    setCart([...cart, pizza]);
  };

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
        <Route
          path="/products/:id"
          render={(props) => <ProductDetail {...props} addToCart={addToCart} />}
        />
        <Route path="/cart" render={() => <CartPage cart={cart} />} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
