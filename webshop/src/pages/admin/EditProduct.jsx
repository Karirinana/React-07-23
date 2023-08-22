import React, { useRef, useState } from 'react';
import productsFromFile from "../../data/products.json";
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function EditProduct() {
  const [t] = useTranslation();
  const [message, newMessage] = useState(t("edit-product") + "!");
  const { productId } = useParams();
  const found = productsFromFile.find(product => product.id === Number(productId));

  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const pictureRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const navigate = useNavigate();

  const edit = () => {
    if (idRef.current.value === "") {
      newMessage(t("you-can-not-edit-product-with-empty-id") + "!");
      return;
    } 
    if (nameRef.current.value === "") {
      newMessage(t("you-can-not-edit-product-with-empty-name") + "!");
      return;
    } 
    if (nameRef.current.value[0].toUpperCase() !== nameRef.current.value[0]) {
      newMessage(t("you-can-not-edit-product-with-a-name, that-starts-with-a-lower-case-letter") + "!");
      return;
    } 
    if (pictureRef.current.value.includes(" ")){
      newMessage(t("you-can-not-edit-picture-with-empty-name") + "!");
      return;
    } 
    const index = productsFromFile.findIndex(product => product.id === Number(productId));
    productsFromFile[index] = {
    "id": Number(idRef.current.value),
    "image": pictureRef.current.value,
    "name": nameRef.current.value,
    "price": Number(priceRef.current.value),
    "description": descriptionRef.current.value,
    "category": categoryRef.current.value,
    "active": activeRef.current.checked
    };
    navigate("/admin/maintain-products");
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

  if (found === undefined) {
    return <div>{t("product-not-found")}</div>
  }

  return (
    <div>
      {idUnique === false && <div>{t("id-is-not-unique")}</div>} <br />
      <div>{message}</div> <br />
      <label>ID</label><br />
      <input className={idUnique === false ? "error" : undefined} ref={idRef} onChange={checkIdUniqueness} defaultValue={found.id} type="number" /> <br />
      <label>{t("name")}</label><br />
      <input ref={nameRef} defaultValue={found.name} type="text" /> <br />
      <label>{t("price")}</label><br />
      <input ref={priceRef} defaultValue={found.price} type="number" /> <br />
      <label>{t("image")}</label><br />
      <input ref={pictureRef} defaultValue={found.image} type="text" /> <br />
      <label>{t("category")}</label><br />
      <input ref={categoryRef} defaultValue={found.category} type="text" /> <br />
      <label>{t("description")}</label><br />
      <input ref={descriptionRef} defaultValue={found.description} type="text" /> <br />
      <label>{t("active")}</label><br />
      <input ref={activeRef} defaultChecked={found.active} type="checkbox" /> <br /> <br />
      <button disabled={idUnique === false} onClick={edit}>{t("edit")}</button>
    </div>
  )
}

export default EditProduct