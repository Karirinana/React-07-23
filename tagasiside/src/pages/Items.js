import React, { useState } from 'react'

function Items() {
    const [items, updItems] = useState(["shoes", "shirts", "socks", "sweaters", "pigs", "goats", "sheep", "spray", "limit", "elite", "exuberant", "destruction", "present", "March", "Jan", "Feb", "Dec"]);
    
    const kustuta = (index) => {
      items.splice(index,1);
      updItems(items.slice());
    }

    const reset = () => {
      updItems(["shoes", "shirts", "socks", "sweaters", "pigs", "goats", "sheep", "spray", "limit", "elite", "exuberant", "destruction", "present", "March", "Jan", "Feb", "Dec"]);
    }

    const sortAZ = () => {
      items.sort((a,b) => a.localeCompare(b));
      updItems(items.slice());
    }

    const moreThan4Letters = () => {
      const vastus = items.filter(element => element.length > 4);
      updItems(vastus);
    }
    
    const addNewItems = () => {
      items.push("chickens", "cats", "dogs");
      updItems(items.slice());
    }

  return (
    <div> 
      <button onClick={reset}>Reset</button>
      <div>Asjad: {items.length} tk</div> 
      <button onClick={sortAZ}>Tähestiku järgi sorteerimine</button>
      <button onClick={moreThan4Letters}>Alles jätta kõik kellel on rohkem kui 4 tähte</button>
      <button onClick={addNewItems}>Lisada asju</button>
      {items.map((element, index) => 
        <div key={element}>
          {element} <button onClick={() => kustuta(index)}>X</button>
        </div>)}
    </div>
  )
}

export default Items