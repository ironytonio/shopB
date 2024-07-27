import React from "react";
import q from "./Footer.module.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pinterest_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className={q.footer}>
      <div className={q.footerLogo}>
        <img src={footer_logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <ul className={q.footerLinks}>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className={q.socialIcon}>
        <div className={q.container}>
          <img src={instagram_icon} alt="instagram" />
        </div>
        <div className={q.container}>
          <img src={pinterest_icon} alt="pinterest" />
        </div>
        <div className={q.container}>
          <img src={whatsapp_icon} alt="whatsapp" />
        </div>
      </div>
      <div className={q.just}>
        <hr />
        <p>Lorem, ipsum dolor.</p>
      </div>
    </div>
  );
};

export default Footer;
