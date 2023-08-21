import React, { useRef, useState } from 'react';
import productsFromFile from "../../data/products.json";
import { useNavigate, useParams } from 'react-router-dom';

function EditProduct() {
  const [message, newMessage] = useState("Edit product!");
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
      newMessage("You can not add product with empty id!");
      return;
    } 
    if (nameRef.current.value === "") {
      newMessage("You can not add product with empty name!");
      return;
    } 
    if (nameRef.current.value[0].toUpperCase() !== nameRef.current.value[0]) {
      newMessage("You can not add product with a name, that starts with a lower case letter!");
      return;
    } 
    if (pictureRef.current.value.includes(" ")) {
      newMessage("You can not add picture with empty name!");
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
    return <div>Product not found</div>
  }

  return (
    <div>
      {idUnique === false && <div>Id is not unique</div>} <br />
      <div>{message}</div> <br />
      <label>ID</label><br />
      <input className={idUnique === false ? "error" : undefined} ref={idRef} onChange={checkIdUniqueness} defaultValue={found.id} type="number" /> <br />
      <label>Name</label><br />
      <input ref={nameRef} defaultValue={found.name} type="text" /> <br />
      <label>Price</label><br />
      <input ref={priceRef} defaultValue={found.price} type="number" /> <br />
      <label>Image</label><br />
      <input ref={pictureRef} defaultValue={found.image} type="text" /> <br />
      <label>Category</label><br />
      <input ref={categoryRef} defaultValue={found.category} type="text" /> <br />
      <label>Description</label><br />
      <input ref={descriptionRef} defaultValue={found.description} type="text" /> <br />
      <label>Active</label><br />
      <input ref={activeRef} defaultChecked={found.active} type="checkbox" /> <br /> <br />
      <button disabled={idUnique === false} onClick={edit}>edit</button>
    </div>
  )
}

export default EditProduct