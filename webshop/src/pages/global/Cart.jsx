import React, { useContext, useState } from "react";
//import cartFile from "../../data/cart.json";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from 'react-i18next';
import styles from "../../css/Cart.module.css";
import Button from 'react-bootstrap/Button';
import ParcelMachines from "../../components/cart/ParcelMachines";
import Payment from "../../components/cart/Payment";
import { CartSumContext } from "../../store/CartSumContext";

function Cart() {
  const {t} = useTranslation();

  const [cart, updateCart] = useState(JSON.parse(localStorage.getItem("cart") || "[]"));
  const { setCartSum } = useContext(CartSumContext);

/*   const addItem = (choosenItem) => {
    cart.push(choosenItem);
    updateCart(cart.slice());
    toast("Item was added successfully!");
  }; */
 
  const removeItem = (index) => {
    cart.splice(index, 1);
    updateCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartSum(summedPrice);
  };

  const removeAll = () => {
    cart.splice(0);
    updateCart(cart.slice());
    toast.success(t("Your cart was emptied successfully!"));
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartSum(summedPrice);
  };

  const decreaseQuantity = (index) => {
    cart[index].quantity--;
    if (cart[index].quantity === 0) {
      cart.splice(index, 1);
    }
    updateCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartSum(summedPrice);
  }

  const increaseQuantity = (index) => {
    cart[index].quantity++;
    updateCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartSum(summedPrice);
  }

  const summedPrice = () => {
    let sum = 0;
    cart.forEach((cartProduct) => (sum = sum + cartProduct.product.price * cartProduct.quantity));
    return sum.toFixed(2);
  };

 

  return (
    <div>
      {cart.length > 0 && (
        <Button variant="outline-dark" onClick={() => removeAll()}>{t("reset")}</Button>
      )}
      {cart.length > 0 && <div>{t("added-products")}: {cart.length}</div>}
      {cart.map((cartProduct, index) => (
        <div className={styles.product} key={index}>
          <img className={styles.image} src={cartProduct.product.image} alt="" /> <br />
          <div className={styles.name}>{cartProduct.product.name}</div>
          <div className={styles.price}>{cartProduct.product.price}</div>
         <div className={styles.quantity}>
           <img src="/plus.png" alt="" className={styles.button} onClick={() => increaseQuantity(index)}/>
            <div>{cartProduct.quantity} tk</div>
            <img src="/minus.png" alt="" className={styles.button} onClick={() => decreaseQuantity(index)}/>
         </div>
          <div className={styles.total}>{(cartProduct.quantity * cartProduct.product.price).toFixed(2)} $</div>
          <img src="/remove.png" alt="" className={styles.button} onClick={() => removeItem()}/>
        </div>
      ))}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        theme="colored"
      />

      {cart.length > 0 && 
        <div className={styles.cart__bottom}>
          <ParcelMachines />
          <div>{t("summary")}: {summedPrice()} $</div>
          <Payment sum={summedPrice()} />
        </div>}
      {cart.length === 0 && <div>{t("cart-is-empty")}</div>}
    </div>
  );
}

export default Cart;
