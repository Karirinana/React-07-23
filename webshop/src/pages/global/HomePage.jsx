import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

import config from "../../data/config.json";

import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';

function HomePage() {
  const [t] = useTranslation();

  const [products, setProducts] = useState([]);

  const [dbProducts, setDbProducts] = useState([]);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(config.products)
      .then(res => res.json())
      .then(json => {
        setProducts(json || []);
        setDbProducts(json || []);
    })

    fetch(config.categories)
      .then(res => res.json())
      .then(json => setCategories(json || []));
    }, []);

  const reset= () => {
    setProducts(dbProducts);
  }

  const sortAZ = () => {
    products.sort((a, b) => a.name.localeCompare(b.name));
    setProducts(products.slice());
  }

  const sortZA = () => {
    products.sort((a, b) => b.name.localeCompare(a.name));
    setProducts(products.slice());
  }

  const sortPriceAsc = () => {
    products.sort((a, b) => a.price - b.price);
    setProducts(products.slice());
  }

  const sortPriceDesc = () => {
    products.sort((a, b) => b.price - a.price);
    setProducts(products.slice());
  }

  /* const filterCamping = () => {
    const compare = products.filter(product => product.category.match("camping"));
    setProducts(compare);
  }

  const filterTent = () => {
    const compare = products.filter(product => product.category.match("tent"));
    setProducts(compare);
  }

  const filterFigure = () => {
    const compare = products.filter(product => product.category.match("figure"));
    setProducts(compare);
  }

  const filterLego = () => {
    const compare = products.filter(product => product.category.match("lego"));
    setProducts(compare);
  } */

  const filterByCategory = (categoryClicked) => {
    const compare = dbProducts.filter(product => product.category === categoryClicked);
    setProducts(compare);
  }

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
      <div>{t("total-products")}: {products.length}</div>
      <Button variant="outline-dark" onClick={reset}>{t("reset")}</Button>
      <br /><br />
      <Button variant="outline-dark" onClick={sortAZ}>{t("SortA-Z")}</Button>
      <Button variant="outline-dark" onClick={sortZA}>{t("SortZ-A")}</Button>
      <Button variant="outline-dark" onClick={sortPriceAsc}>{t("Sort price asc")}</Button>
      <Button variant="outline-dark" onClick={sortPriceDesc}>{t("Sort price desc")}</Button>
      <br />
{/*       <Button variant="outline-dark" onClick={() => filterByCategory("camping")}>{t("camping")}</Button>
      <Button variant="outline-dark" onClick={() => filterByCategory("tent")}>{t("tent")}</Button>
      <Button variant="outline-dark" onClick={() => filterByCategory("figure")}>{t("figure")}</Button>
      <Button variant="outline-dark" onClick={() => filterByCategory("lego")}>{t("lego")}</Button> */}

      <br /><br />

      {categories.map(category => <Button key={category.name} variant="outline-dark" onClick={() => filterByCategory(category.name)}>{t(category.name)}</Button>)}

      <br /><br />

      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt="" />
          <div>{product.name}</div>
          <div>{product.price} $</div>
          <Link to={"/product/" + product.name}>
            <Button variant="outline-dark">{t("more-info")}</Button>
          </Link>
          <Button variant="outline-dark" onClick={() => addToCart(product)}>{t("add-to-cart")}</Button>
        </div>
      ))}
      <ToastContainer 
      position="bottom-right"
      autoClose={5000}
      theme="colored"
      />
    </div>
  );
}
export default HomePage;
