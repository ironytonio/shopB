import React, { useContext } from "react";
import q from "./CartItems.module.css";
import remove_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../context/ShopContext";

const CartItems = () => {
  const { all_product, cartItem, removeFromCart, getTotalCartAmmount } =
    useContext(ShopContext);
  return (
    <div className={q.cartItem}>
      <div className={q.main}>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        const quantity = cartItem[e.id] || 0; // використовуємо 0, якщо значення відсутнє
        if (quantity > 0) {
          return (
            <div>
              <div className={q.format} key={e.id}>
                <img src={e.image} className={q.icon} alt={e.name} />
                <p>{e.name}</p>
                <p>${e.newPrice}</p>
                <button className={q.quantity}>{quantity}</button>
                <p>${e.newPrice * quantity}</p>
                <img
                  className={q.removeIcon}
                  src={remove_icon}
                  onClick={() => removeFromCart(e.id)}
                  alt="Remove"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div></div>
      <div className={q.cartDown}>
        <div className={q.cartTotal}>
          <h1>cart Totals</h1>
          <div className={q.totalItem}>
            <p>Subtotal</p>
            <p>${getTotalCartAmmount()}</p>
          </div>
          <hr />
          <div className={q.totalItem}>
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr />
          <div className={q.totalItem}>
            <h3>Total</h3>
            <h3>${getTotalCartAmmount()}</h3>
          </div>
          <button>PROCEED TO CHECKOUT</button>
          <div className={q.promocod}>
            <p>If you have a promo cod , Enter it here</p>
            <div className={q.promoBox}>
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
