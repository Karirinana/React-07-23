import React, { useRef } from "react";
import { useState } from "react";
import productsFromFile from "../../data/products.json";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile);
  const searchedRef = useRef();

  const removeProduct = (index) => {
    productsFromFile.splice(index, 1);
    setProducts(productsFromFile.slice());
  };

  const searchFromProducts = () => {
    const result = productsFromFile.filter((product) =>
      product.name.toLowerCase().includes(searchedRef.current.value.toLowerCase())
    );
    setProducts(result);
  };

  return (
    <div>
      <input onChange={searchFromProducts} ref={searchedRef} type="text" />
      <div>{products.length}</div>
      <div>
        {products.map((product, index) => (
          <div key={product.id}>
            <img src={product.image} alt="" />
            <div>{product.id}</div>
            <div>{product.name}</div>
            <div>{product.price}</div>
            <div>{product.category}</div>
            <div>{product.description}</div>
            <button onClick={() => removeProduct(index)}>delete</button>
            <Button as={Link} to={"/admin/edit-product/" + product.id}>
              edit
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MaintainProducts;
