import { BsCart2 } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";
import { useState } from "react";

let userName = null; // Global variable to store the user's name

const Navbar = ({ name }) => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  
  let userName = name;
  

  const handleNameClick = () => {
    if (userName) {
      navigate("/usercard");
    } else {
      navigate("/login");
    }
  };

  return (
    <header>
      <nav>
        <div className="nav__wrapper">
          <div className="nav__name">
            <img src={logo} alt="logo" />
            <h2>Marwar Bazzar</h2>
          </div>
          <div className="nav__links">
            <h3 onClick={() => navigate("/")}>Home</h3>
            <h3 onClick={() => navigate("/products")}>Products</h3>
          </div>
          <div className="nav__feature">
            <Link to="/cart">
              <BsCart2 className="logo" />
            </Link>
            <span className="cart__length">{cart.length}</span>
            <button onClick={handleNameClick}>
              {userName ? userName : "Login"}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
