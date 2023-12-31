import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import config from "../../data/config.json";
import { useTranslation } from 'react-i18next';
import { Spinner } from 'react-bootstrap';


function SingleProduct() {
  const {t} = useTranslation();

  const {name} = useParams();

  const [products, setProducts] = useState([]);

  const [isLoading, setLoading] = useState(true);


  useEffect(() => {
    fetch(config.products)
      .then(res => res.json())
      .then(json => {
        setProducts(json || []);
        setLoading(false);
    })
    }, []);

  if (isLoading === true) {
    return <Spinner />
  }

  const found = products.find(product => product.name === name);

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