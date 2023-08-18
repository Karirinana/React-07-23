import React from "react";

import productsFromFile from "../../data/products.json";
import { useState } from "react";

function HomePage() {
  const [products, setProducts] = useState(productsFromFile);

  return (
    <div>
      <div>Total products: {products.length} pcs</div>
      <br /><br />
      <button>Sorteeri A-Z</button>
      <button>Sorteeri Z-A</button>
      <button>Sort price asc</button>
      <button>Sort price desc</button>
      <br />
      <button>camping</button>
      <button>tent</button>
      <button>figure</button>
      <button>lego</button>

      {productsFromFile.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt="" />
          <div>{product.name}</div>
          <div>{product.price} $</div>
          <button>add-to-cart</button>
        </div>
      ))}
    </div>
  );
}
export default HomePage;
