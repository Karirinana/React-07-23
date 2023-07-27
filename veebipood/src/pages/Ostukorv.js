import React from 'react'
import { Link } from 'react-router-dom'

function Ostukorv() {
  return (
    <div>
      <div>Ostukorv on tühi</div>
      <Link to="/lisa-toode">Tooteid lisama</Link>
    </div>
  )
}

export default Ostukorv

//Kus teen "npm start" -sinna tulevad koodivead
//komplileerimise vead ehk:
//1. import tegemata
//2. muutuja seos vale
//3. html pole uks komplekt
//jnejne

//run-time error ehk kaimasolemise error
//parem klops ---> inspect --> console
//1. className vaikse n tahega
//2. URL vale 
