import React, { useState } from 'react'
import { useRef } from 'react';

import productsFromfile from "../../data/products.json";

function AddProduct() {
  const [message,newMessage] = useState("Add product!")

  const nameRef = useRef();
  const idRef = useRef();
  const priceRef = useRef();
  const pictureRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();

  const addNewProduct = () => {
    if (nameRef.current.value === "") {
      newMessage("You can not add product with empty name!");
    } else {
      newMessage("New product " + nameRef.current.value + " was added successfully!");
      productsFromfile.push({
        name : nameRef.current.value,
        id : Number(idRef.current.value),
        price: Number(priceRef.current.value),
        image: pictureRef.current.value,
        category: categoryRef.current.value,
        description: descriptionRef.current.value,
        active: activeRef.current.checked});
    }
  }

  return (
    <div>
      <div>{message}</div> <br />

      <label>Product name</label> <br />
      <input ref={nameRef}type="text" /><br />

      <label>Product id</label> <br />
      <input ref={idRef}type="number" /><br />

      <label>Product price</label> <br />
      <input ref={priceRef}type="number" /><br />

      <label>Product picture</label> <br />
      <input ref={pictureRef}type="text" /><br />

      <label>Product category</label> <br />
      <input ref={categoryRef}type="text" /><br />

      <label>Product description</label> <br />
      <input ref={descriptionRef}type="text" /><br />
      
      <label>Product active</label> <br />
      <input ref={activeRef}type="checkbox" /><br />

      <button onClick={addNewProduct}>Add</button>



    </div>
  )
}

export default AddProduct