import React, { useEffect, useRef } from "react";
import { useState } from "react";
import config from "../../data/config.json";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function MaintainProducts() {
  const [t] = useTranslation();
  const [products, setProducts] = useState([]);

  const [dbProducts, setDbProducts] = useState([]);

  useEffect(() => {
    fetch(config.products)
      .then(res => res.json())
      .then(json => {
        setProducts(json || []);
        setDbProducts(json || []);
    })
    }, []);

  const searchedRef = useRef();

  const removeProduct = (index) => {
    dbProducts.splice(index, 1);
    setProducts(dbProducts.slice());
  };

  const searchFromProducts = () => {
    const result = dbProducts.filter((product) =>
      product.name.toLowerCase().includes(searchedRef.current.value.toLowerCase()) || 
      product.description.toLowerCase().includes(searchedRef.current.value.toLowerCase()) ||
      product.id.toString().includes(searchedRef.current.value) 
    );
    setProducts(result);
  };

  return (
    <div>
      <input onChange={searchFromProducts} ref={searchedRef} type="text" />
      <div>{products.length}</div>
      <div>
        {products.map((product, index) => (
          <div key={product.id} className={ product.active ? "active" : "inactive"}>
            <img src={product.image} alt="" />
            <div>{product.id}</div>
            <div>{product.name}</div>
            <div>{product.price}</div>
            <div>{product.category}</div>
            <div>{product.description}</div>
            <button onClick={() => removeProduct(index)}>{t("remove-item")}</button>
            <Button as={Link} to={"/admin/edit-product/" + product.id}>
              {t("edit")}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MaintainProducts;
