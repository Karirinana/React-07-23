import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import config from "../data/config.json";

function LisaJook() {
  const joogidRef = useRef();

  const [joogid, setJoogid] = useState([]);

  useEffect(() => {
    fetch(config.joogidDbUrl)
      .then(res => res.json())
      .then(json => setJoogid(json || []));
  }, []);

  const lisa = () => {
    joogid.push({"nimi": joogidRef.current.value});
    setJoogid(joogid.slice());
    fetch(config.joogidDbUrl, {method: "PUT", body: JSON.stringify(joogid)})
  }

  return (
    <div>
      <label htmlFor="">Lisa oma joogi: </label>
      <input ref={joogidRef} type="text" />
      <button onClick={() => lisa ()}>lisa</button>
    </div>
  )
}

export default LisaJook