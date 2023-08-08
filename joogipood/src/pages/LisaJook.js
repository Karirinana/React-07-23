import React from 'react';
import joogidFailist from "../data/joogid.json";
import { useRef } from 'react';

function LisaJook() {
  const joogidRef = useRef();

  const lisa = () => {
    joogidFailist.push(joogidRef.current.value);
  }

  return (
    <div>
      <label htmlFor="">Lisa oma joogi: </label>
      <input ref={joogidRef} type="text" />
      <button onClick={lisa}>lisa</button>
    </div>
  )
}

export default LisaJook