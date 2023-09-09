import React, { useEffect, useRef } from "react";
import { useState } from "react";
import config from "../../data/config.json";
import styles from "../../css/MaintainProducts.module.css"

import { Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function MaintainProducts() {
  const [t] = useTranslation();
  const [products, setProducts] = useState([]);

  const [dbProducts, setDbProducts] = useState([]);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(config.products)
      .then(res => res.json())
      .then(json => {
        setProducts(json || []);
        setDbProducts(json || []);
        setLoading(false);
    })
    }, []);

  const searchedRef = useRef();

  const removeProduct = (productId) => {
    const index = dbProducts.findIndex(product => product.id === productId)
    dbProducts.splice(index, 1);
   /*  setProducts(dbProducts.slice()); */
    searchFromProducts();
    fetch(config.products, {method: "PUT", body: JSON.stringify(dbProducts)})
    .then(() => {

    })
  };

  const searchFromProducts = () => {
    const result = dbProducts.filter((product) =>
      product.name.toLowerCase().includes(searchedRef.current.value.toLowerCase()) || 
      product.description.toLowerCase().includes(searchedRef.current.value.toLowerCase()) ||
      product.id.toString().includes(searchedRef.current.value) 
    );
    setProducts(result);
  };

  if (isLoading === true) {
    return <Spinner />
  }

  return (
    <div>
      <input onChange={searchFromProducts} ref={searchedRef} type="text" />
      <div>{products.length}</div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
            <tr key={product.id} className={ product.active ? styles.active : styles.inactive}>
              <td><img src={product.image} alt="" /></td>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>{product.description}</td>
              <td>
                <button onClick={() => removeProduct(product.id)}>{t("remove-item")}</button>
                <Button as={Link} to={"/admin/edit-product/" + product.id}>
                  {t("edit")}
                </Button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MaintainProducts;
