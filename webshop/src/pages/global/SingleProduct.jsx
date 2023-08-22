import React from 'react';
import { useParams, Link } from 'react-router-dom';
import productsFromFile from "../../data/products.json";
import { useTranslation } from 'react-i18next';


function SingleProduct() {
  const {t} = useTranslation();

  const {name} = useParams();

  const found = productsFromFile.find(product => product.name === name);

  if (found === undefined) {
    return <div>{t("product-not-found")}</div>
  }


  return (
    <div>
      <img src={found.image} alt="product" />
      <div>{t("product-name")}: {found.name}</div>
      <div>{t("product-price")}: {found.price}$</div>
      <div>{t("product-description")}: {found.description}</div>
      <div>{t("product-category")}: {t(found.category)}</div>
      <Link to={"/"}>
        <button>{t("back")}</button>
      </Link>
    </div>
  )
}

export default SingleProduct