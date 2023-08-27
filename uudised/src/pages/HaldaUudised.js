import React, { useState } from "react";

function HaldaUudised() {
  const [uudised, muudaUudised] = useState(JSON.parse(localStorage.getItem("uudised")) || []);

  const kustuta = (index) => {
    uudised.splice(index, 1);
    muudaUudised(uudised.slice());
    localStorage.setItem("uudised", JSON.stringify(uudised));
  };

  return (
    <div>
      <div>
        {uudised.map((uudis,index) => (
          <div>
            <div>{uudis}</div>
            <button onClick={() => kustuta(index)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HaldaUudised;
