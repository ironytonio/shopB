import React from "react";
import { useState } from "react";
import q from "./Navbar.module.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const Navbar = () => {
  const { getTotalCartProduct } = useContext(ShopContext);
  const [menu, setMenu] = useState("Shop");

  return (
    <div className={q.navbar}>
      <div className={q.navLogo}>
        <img src={logo} alt="LOGO" />
        <p>Shopper</p>
      </div>

      <ul className={q.navMenu}>
        <li
          onClick={() => {
            setMenu("Shop");
          }}
        >
          <Link to="/" className={q.link}>
            {" "}
            Shop{" "}
          </Link>{" "}
          {menu === "Shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Men");
          }}
        >
          <Link to="/mens" className={q.link}>
            {" "}
            Men{" "}
          </Link>
          {menu === "Men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Women");
          }}
        >
          <Link to="/womens" className={q.link}>
            {" "}
            Women{" "}
          </Link>
          {menu === "Women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Kids");
          }}
        >
          <Link to="/kids" className={q.link}>
            {" "}
            Kids{" "}
          </Link>
          {menu === "Kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className={q.navLoginCart}>
        <Link to="./login">
          <button>Login</button>
        </Link>
        <Link to="./cart">
          <img src={cart_icon} alt="zaraza" />
        </Link>
        <div className={q.navCartCount}>{getTotalCartProduct()}</div>
      </div>
    </div>
  );
};

export default Navbar;
