import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import styles from "../../css/HomePage.module.css"


function Product({product}) {
    const [t] = useTranslation();

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
      };
    
  return (
    <div>
         <div key={product.id} className={styles.product}>
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