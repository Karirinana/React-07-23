import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import styles from "../../css/HomePage.module.css"
import { CartSumContext } from '../../store/CartSumContext';


function Product({product}) {
    const [t] = useTranslation();
    const { setCartSum } = useContext(CartSumContext);

    const addToCart = (choosenProduct) => {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        const index = cart.findIndex(cartProduct => cartProduct.product.id === choosenProduct.id);
        if (index >= 0) {
          cart[index].quantity = cart[index].quantity + 1 ;
          
        } else {
          cart.push({"quantity" : 1, "product": choosenProduct});
        }  
        localStorage.setItem("cart", JSON.stringify(cart));
        toast(t("Item was added to the cart"));
        let sum = 0;
        cart.forEach((cartProduct) => (sum = sum + cartProduct.product.price * cartProduct.quantity));
        setCartSum(sum.toFixed(2));
      };
    
  return (
    <div>
         <div className={styles.product}>
          <img src={product.image} alt="" />
          <div className={styles.name}>{product.name}</div>
          <div>{product.price} $</div>
          <Link to={"/product/" + product.name}>
            <Button variant="outline-dark">{t("more-info")}</Button>
          </Link>
          <Button variant="outline-dark" onClick={() => addToCart(product)}>{t("add-to-cart")}</Button>
        </div>
    </div>
  )
}

export default Product