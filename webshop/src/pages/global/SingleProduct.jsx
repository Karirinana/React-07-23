import React from 'react';
import { useParams, Link } from 'react-router-dom';
import productsFromFile from "../../data/products.json";


function SingleProduct() {
  const {name} = useParams();

  const found = productsFromFile.find(product => product.name === name);

  if (found === undefined) {
    return <div>Product not found!</div>
  }


  return (
    <div>
      <img src={found.image} alt="product" />
      <div>Product name: {found.name}</div>
      <div>Product price: {found.price}</div>
      <div>Product description: {found.description}</div>
      <div>Product category: {found.category}</div>
      <Link to={"/"}>
        <button>Back</button>
      </Link>
    </div>
  )
}

export default SingleProduct