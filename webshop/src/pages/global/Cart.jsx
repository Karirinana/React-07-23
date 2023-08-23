import React, { useState } from "react";
//import cartFile from "../../data/cart.json";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from 'react-i18next';

function Cart() {
  const {t} = useTranslation();

  const [cart, updateCart] = useState(JSON.parse(localStorage.getItem("cart") || "[]"));

/*   const addItem = (choosenItem) => {
    cart.push(choosenItem);
    updateCart(cart.slice());
    toast("Item was added successfully!");
  }; */

  const removeItem = (index) => {
    cart.splice(index, 1);
    updateCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const removeAll = () => {
    cart.splice(0);
    updateCart(cart.slice());
    toast.success(t("Your cart was emptied successfully!"));
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const summedPrice = () => {
    let sum = 0;
    cart.forEach((product) => (sum = sum + product.price));
    return sum;
  };

  return (
    <div>
      {cart.length > 0 && (
        <button onClick={() => removeAll()}>{t("reset")}</button>
      )}
      {cart.length > 0 && <div>{t("added-products")}: {cart.length}</div>}
      {cart.map((product, index) => (
        <div key={index}>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <img src={product.image} alt="" /> <br />
          {/* <button onClick={() => addItem(product)}>Add more</button> */}
          <button onClick={() => removeItem(index)}>{t("remove-item")}</button>
        </div>
      ))}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        theme="colored"
      />
      {cart.length === 0 && <div>{t("cart-is-empty")}</div>}
      {cart.length > 0 && <div>{t("summary")}: {summedPrice()} $</div>}
    </div>
  );
}

export default Cart;
