import React, { useEffect } from "react";
import { useState } from "react";

import config from "../../data/config.json";
import styles from "../../css/HomePage.module.css"

import { ToastContainer } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import { Spinner } from "react-bootstrap";
import CarouselGallery from "../../components/home/CarouselGallery";
import SortButtons from "../../components/home/SortButtons";
import FilterButtons from "../../components/home/FilterButtons";
import Product from "../../components/home/Product";

function HomePage() {
  const [t] = useTranslation();

  const [products, setProducts] = useState([]);

  const [dbProducts, setDbProducts] = useState([]);

  const [categories, setCategories] = useState([]);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(config.products)
      .then(res => res.json())
      .then(json => {
        setProducts(json.slice() || []);
        setDbProducts(json.slice() || []);
        setLoading(false);
    })

    fetch(config.categories)
      .then(res => res.json())
      .then(json => setCategories(json || []));
    }, []);

  const reset= () => {
    setProducts(dbProducts.slice());
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

  
  if (isLoading === true) {
    return <Spinner variant="outline-dark"/>
  }

  return (
    <div>
      <CarouselGallery />
      <div>{t("total-products")}: {products.length}</div>
      <Button variant="outline-dark" onClick={reset}>{t("reset")}</Button>
      <br /><br />
      <SortButtons 
        products={products}
        setProducts={setProducts}
        />
      <br />
{/*       <Button variant="outline-dark" onClick={() => filterByCategory("camping")}>{t("camping")}</Button>
      <Button variant="outline-dark" onClick={() => filterByCategory("tent")}>{t("tent")}</Button>
      <Button variant="outline-dark" onClick={() => filterByCategory("figure")}>{t("figure")}</Button>
      <Button variant="outline-dark" onClick={() => filterByCategory("lego")}>{t("lego")}</Button> */}

      <br /><br />

      <FilterButtons 
        dbProducts={dbProducts}
        setProducts={setProducts}
        categories={categories}/>

      <br /><br />

      <div className={styles.products}>
        {products.map((product) => (
          <Product product={product}/>
        ))}
      </div>
      <ToastContainer 
      position="bottom-right"
      autoClose={5000}
      theme="colored"
      />
    </div>
  );
}
export default HomePage;
