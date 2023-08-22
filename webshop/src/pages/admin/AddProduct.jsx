import React, { useState } from "react";
import { useRef } from "react";
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';

import productsFromFile from "../../data/products.json";

function AddProduct() {
  const {t} = useTranslation();

  const [message, newMessage] = useState(t("add-new-product"));

  const nameRef = useRef();
  const idRef = useRef();
  const priceRef = useRef();
  const pictureRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();

  const addNewProduct = () => {
    if (idRef.current.value === "") {
      toast(t("you-can-not-add-product-with-empty-id"));
      return;
    } 
    if (nameRef.current.value === "") {
      toast(t("noNameInsertedError"));
      return;
    } 
    if (nameRef.current.value[0].toUpperCase() !== nameRef.current.value[0]) {
      toast(t("lowerCaseLetterNameError"));
      return;
    } 
    if (pictureRef.current.value.includes(" ")) {
      toast(t("pictureWithEmptyNameError"));
      return;
    } 
      newMessage(
        t("newProduct") + " " + nameRef.current.value + " " + t("NewProductAddedSuccessfully")
      );
      productsFromFile.push({
        name: nameRef.current.value,
        id: Number(idRef.current.value),
        price: Number(priceRef.current.value),
        image: pictureRef.current.value,
        category: categoryRef.current.value,
        description: descriptionRef.current.value,
        active: activeRef.current.checked,
      });
    }
    
  const [idUnique, setIdUnique] = useState(true);

  const checkIdUniqueness = () => {
   const index = productsFromFile.findIndex(product => product.id === Number(idRef.current.value))

   if (index === -1) {
    setIdUnique(true);
   } else {
    setIdUnique(false);
   }
  }  

  return (
    <div>
      {idUnique === false && <div>{t("id-is-not-unique")}</div>} <br />
      <div>{message}</div> <br />
      <label>{t("product-name")}</label> <br />
      <input ref={nameRef} type="text" />
      <br />
      <label>{t("product-id")}</label> <br />
      <input className={idUnique === false ? "error" : undefined} ref={idRef} onChange={checkIdUniqueness} type="number" />
      <br />
      <label>{t("product-price")}</label> <br />
      <input ref={priceRef} type="number" />
      <br />
      <label>{t("product-image")}</label> <br />
      <input ref={pictureRef} type="text" />
      <br />
      <label>{t("product-category")}</label> <br />
      <input ref={categoryRef} type="text" />
      <br />
      <label>{t("product-description")}</label> <br />
      <input ref={descriptionRef} type="text" />
      <br />
      <label>{t("product-active")}</label> <br />
      <input ref={activeRef} type="checkbox" />
      <br />
      <button onClick={addNewProduct}>{t("add")}</button>
      <ToastContainer 
      position="bottom-right"
      autoClose={5000}
      theme="colored"
      />
    </div>
  );
}

export default AddProduct;
