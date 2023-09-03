import React, { useEffect, useRef, useState } from 'react';
import config from "../../data/config.json";

function MaintainShops() {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    fetch(config.shops)
      .then(responce => responce.json())
      .then(json => setShops(json || []))
  }, []);

  const nameRef = useRef();
  const openTimeRef = useRef();
  const latitudeRef = useRef();
  const longtitudeRef = useRef();
  const adressRef = useRef();
  const urlRef = useRef();

  const addShop = () => {
    shops.push({
      "name": nameRef.current.value, 
      "availability": openTimeRef.current.value, 
      "lat": latitudeRef.current.value, 
      "lng": longtitudeRef.current.value, 
      "address": adressRef.current.value, 
      "url": urlRef.current.value,
    });
    setShops(shops.slice());
    fetch(config.shops, {
      method: "PUT",
      body: JSON.stringify(shops)
    })
  }

  const deleteShop = (index) => {
    shops.splice(index, 1);
    setShops(shops.slice());
    fetch(config.shops, {
      method: "PUT",
      body: JSON.stringify(shops)
    })
  }

  return (
    <div>
      <div>add-shop</div> <br />
      <label>name</label> <br />
      <input ref={nameRef} type="text" /> <br />
      <label>opening hours</label> <br />
      <input ref={openTimeRef} type="text" /> <br />
      <label>latitude</label> <br />
      <input ref={latitudeRef} type="text" /> <br />
      <label>longtitude</label> <br />
      <input ref={longtitudeRef} type="text" /> <br />
      <label>adress</label> <br />
      <input ref={adressRef} type="text" /> <br />
      <label>website</label> <br />
      <input ref={urlRef} type="text" /> <br /> <br />
      <button onClick={addShop}>add-shop</button> <br /> <br />
      {shops.map((shop, index) =>
      <div key={index}>
        {shop.name},
        {shop.availability},
        {shop.lat},
        {shop.lng},
        {shop.address},
        {shop.url}
        <button onClick={() => deleteShop(index)}>x</button>
      </div>)}
    </div>
  )
}

export default MaintainShops