// Write all the code here
import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

const Header = ({ isAuthenticated = false }) => {
  return (
    <>
      <nav>
        <div>
          <Link to="/">
            <IoFastFoodOutline />
          </Link>
        </div>

        <div>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/cart">
            <HiOutlineShoppingCart />
          </Link>
          <DropdownMenu className="dropdown"></DropdownMenu>
        </div>
      </nav>
      <div
        style={{
          background: "darkred",
          height: "5px",
        }}
      />
    </>
  );
};

export default Header;
