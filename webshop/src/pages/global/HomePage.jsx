import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

import productsFromFile from "../../data/products.json";
import cartFile from "../../data/cart.json";
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

function HomePage() {
  const [t] = useTranslation();

  const [products, setProducts] = useState(productsFromFile);

  const reset= () => {
    setProducts(productsFromFile);
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

  const filterCamping = () => {
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
  }

  const addToCart = (choosenProduct) => {
    cartFile.push(choosenProduct);
    toast(t("Item was added to the cart"))
  };

  return (
    <div>
      <div>{t("total-products")}: {products.length}</div>
      <button onClick={reset}>{t("reset")}</button>
      <br /><br />
      <button onClick={sortAZ}>{t("SortA-Z")}</button>
      <button onClick={sortZA}>{t("SortZ-A")}</button>
      <button onClick={sortPriceAsc}>{t("Sort price asc")}</button>
      <button onClick={sortPriceDesc}>{t("Sort price desc")}</button>
      <br />
      <button onClick={filterCamping}>{t("camping")}</button>
      <button onClick={filterTent}>{t("tent")}</button>
      <button onClick={filterFigure}>{t("figure")}</button>
      <button onClick={filterLego}>{t("lego")}</button>

      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt="" />
          <div>{product.name}</div>
          <div>{product.price} $</div>
          <Link to={"/product/" + product.name}>
            <button>{t("more-info")}</button>
          </Link>
          <button onClick={() => addToCart(product)}>{t("add-to-cart")}</button>
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
