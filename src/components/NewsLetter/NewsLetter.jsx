import React from "react";
import q from "./NewsLetter.module.css";

const NewsLetter = () => {
  return (
    <div className={q.newsLetter}>
      <h1>Get Exclusive Ofeers On Your Email</h1>
      <p>Subscribe to our new letter and stray update</p>
      <div>
        <input type="email" placeholder="Your Email id" />
        <button className={q.btn}>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
