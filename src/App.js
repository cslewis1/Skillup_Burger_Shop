import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Home from "./components/home/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Contact from "./components/contact/Contact";
// Add module imports for CART
import Cart from "./components/cart/Cart";
// Add module imports for Shipping
import Shipping from "./components/cart/Shipping";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
// Add module imports for MY ORDERS
import MyOrders from "./components/myOrders/MyOrders";
import OrderDetails from "./components/myOrders/OrderDetails";
import About from "./components/about/About";

import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/table.scss";
import "./styles/orderDetails.scss";
import "./styles/about.scss";

function App() {
  const [burger1, setBurger1] = useState(0);
  const [burger2, setBurger2] = useState(0);
  const [burger3, setBurger3] = useState(0);

  //Function to increment the cart items
  const increment = (item) => {
    item === "burger1"
      ? setBurger1(burger1 + 1)
      : item === "burger2"
      ? setBurger2(burger2 + 1)
      : item === "burger3"
      ? setBurger3(burger3 + 1)
      : console.log("No item found");
  };

  //Function to decrement the cart items
  const decrement = (item) => {
    item === "burger1" && burger1 > 0
      ? setBurger1(burger1 - 1)
      : item === "burger2" && burger2 > 0
      ? setBurger2(burger2 - 1)
      : item === "burger3" && burger3 > 0
      ? setBurger3(burger3 - 1)
      : console.log("No item found");
  };

  return (
    <Router>
      <Header isAuthenticated={true} />
      <Routes>
        <Route path="/" element={<Home increment={increment} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        // Add the Route for CART
        <Route
          path="/cart"
          element={
            <Cart
              increment={increment}
              decrement={decrement}
              burger1={burger1}
              burger2={burger2}
              burger3={burger3}
            />
          }
        />
        // Add the Route for SHIPPING
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/login" element={<Login />} />
        <Route path="/me" element={<Profile />} />
        // Add the Route for MY ORDERS
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/orderdetails" element={<OrderDetails />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
