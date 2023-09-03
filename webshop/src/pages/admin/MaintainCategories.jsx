import React, { useEffect, useRef, useState } from 'react';
import config from "../../data/config.json";

function MaintainCategories() {
  const [categories, setCategories] = useState([]);
  const categoryRef = useRef();

  useEffect(() => {
    fetch(config.categories)
    .then(res => res.json())
    .then(json => setCategories(json || []))
  }, []);

  const addCategory = () => {
    categories.push({"name": categoryRef.current.value});
    setCategories(categories.slice());
    fetch(config.categories, {
      method: "PUT",
      body: JSON.stringify(categories)
    })
  }

  const deleteCategory = (index) => {
    categories.splice(index, 1);
    setCategories(categories.slice());
    fetch(config.categories, {
      method: "PUT",
      body: JSON.stringify(categories)
    })
  }
  // LISAMISEKS- POST 
  // ASENDAMISEKS- PUT
  // VOTMISEKS - GET
  // KUSTUTAMISEKS - DELETE
  // REST operations

  return (
    <div>
      <label>category</label> <br />
      <input ref={categoryRef} type="text" /> <br />
      <button onClick={addCategory}>submit</button>
      {categories.map((category, index) => 
        <div>
          {category.name}
          <button onClick={() => deleteCategory(index)}>x</button>
        </div>
        
      )}
  </div>
  )
}

export default MaintainCategories