import React, { useEffect, useState } from "react";
//import cartFile from "../../data/cart.json";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from 'react-i18next';
import "../../css/Cart.css"
import Button from 'react-bootstrap/Button';

function Cart() {
  const {t} = useTranslation();

  const [cart, updateCart] = useState(JSON.parse(localStorage.getItem("cart") || "[]"));

/*   const addItem = (choosenItem) => {
    cart.push(choosenItem);
    updateCart(cart.slice());
    toast("Item was added successfully!");
  }; */
  const [parcelMachines, setParcelMachines] = useState([]);

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
    .then(responce => responce.json())
    .then(json => setParcelMachines(json))
  }, []);

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

  const decreaseQuantity = (index) => {
    cart[index].quantity--;
    if (cart[index].quantity === 0) {
      cart.splice(index, 1);
    }
    updateCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const increaseQuantity = (index) => {
    cart[index].quantity++;
    updateCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const summedPrice = () => {
    let sum = 0;
    cart.forEach((cartProduct) => (sum = sum + cartProduct.product.price * cartProduct.quantity));
    return sum;
  };

  const pay = () => {
    const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";
    const paymentBody = {
      "api_username": "e36eb40f5ec87fa2",
      "account_name": "EUR3D1",
      "amount": summedPrice(),
      "order_reference": Math.random() * 9999999,
      "token_agreement": "unscheduled",
      "nonce": "a9b7f7e7" + Math.random() * 9999999 + new Date(),
      "timestamp": new Date(),
      "customer_ip": "1.2.3.4",
      "customer_url": "https://webshop-hobby-lobby.web.app/cart"
    };
    const paymentHeaders = {
      "Authorization": "Basic ZTM2ZWI0MGY1ZWM4N2ZhMjo3YjkxYTNiOWUxYjc0NTI0YzJlOWZjMjgyZjhhYzhjZA==",
      "Content-Type": "application/json"
    };

    fetch(url,{ method: "POST", body: JSON.stringify(paymentBody), headers: paymentHeaders})
    .then(res => res.json())
    .then(json => window.location.href = json.payment_link)
  }

  if (parcelMachines.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {cart.length > 0 && (
        <Button variant="outline-dark" onClick={() => removeAll()}>{t("reset")}</Button>
      )}
      {cart.length > 0 && <div>{t("added-products")}: {cart.length}</div>}
      {cart.map((cartProduct, index) => (
        <div className="product" key={index}>
          <img className="image" src={cartProduct.product.image} alt="" /> <br />
          <div className="name">{cartProduct.product.name}</div>
          <div className="price">{cartProduct.product.price}</div>
         <div className="quantity">
           <img src="/plus.png" alt="" className="button" onClick={() => increaseQuantity(index)}/>
            <div>{cartProduct.quantity} tk</div>
            <img src="/minus.png" alt="" className="button" onClick={() => decreaseQuantity(index)}/>
         </div>
          <div className="total">{(cartProduct.quantity * cartProduct.product.price).toFixed(2)} $</div>
          <img src="/remove.png" alt="" className="button" onClick={() => removeItem()}/>
        </div>
      ))}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        theme="colored"
      />

      {cart.length > 0 && 
        <div>
          <select>{parcelMachines.filter(pm => pm.A0_NAME === "EE").sort((a,b) => a - b).map(pm => <option key={pm.NAME}>{pm.NAME}</option>)}</select>
          <div>{t("summary")}: {summedPrice().toFixed(2)} $</div>
          <button onClick={pay}>Pay</button>
        </div>}
      {cart.length === 0 && <div>{t("cart-is-empty")}</div>}
    </div>
  );
}

export default Cart;
