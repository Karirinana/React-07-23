import React, { useEffect, useState } from "react";

function ParcelMachines() {
  const [parcelMachines, setParcelMachines] = useState([]);

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
      .then((responce) => responce.json())
      .then((json) => setParcelMachines(json));
  }, []);

  if (parcelMachines.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <select>
        {parcelMachines
          .filter((pm) => pm.A0_NAME === "EE")
          .sort((a, b) => a - b)
          .map((pm) => (
            <option key={pm.NAME}>{pm.NAME}</option>
          ))}
      </select>
    </div>
  );
}

export default ParcelMachines;
