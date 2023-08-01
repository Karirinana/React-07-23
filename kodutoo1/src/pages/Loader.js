import React, { useState } from 'react'

function Loader() {
    const [kasLaeb, uuendaLaadimist] = useState(true);

  return (
    <div>
        {kasLaeb === true && <div class="lds-heart"><div></div></div>}
        <button onClick={() => uuendaLaadimist (false)}>lõpeta laadimine</button>
    </div>
  )
}

export default Loader