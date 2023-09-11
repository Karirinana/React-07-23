import React, { useContext, useRef, useState } from 'react'
import { AuthContext } from '../../store/AuthContext';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const {setLoggedIn } = useContext(AuthContext); 
  const emailRef = useRef();
  const passwordRef = useRef();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDCI0A82LwAcl-QZxhHXSbmeQjhqTdEN7Q"

  const signup = () => {
    const body = {
      "email": emailRef.current.value,
      "password": passwordRef.current.value,
      "returnSecureToken": true
    }
    const headers = {
      "Content-Type": "application/json"
    }

    fetch (url, {"method": "POST", "body": JSON.stringify(body), "headers": headers})
    .then(res => res.json())
    .then(json => {
      if(json.error === undefined) {
        setLoggedIn(true);
        navigate("/admin");
        sessionStorage.setItem("token", json.idToken);
      } else {
        setMessage(json.error.message);
      }
    })

   
}

  return (
    <div>
      <div>{message}</div>
      <label>Email</label><br />
      <input ref={emailRef} type="text" /><br />
      <label>Password</label><br />
      <input ref={passwordRef} type="text" /><br />
      <button onClick={signup}>Register</button><br />
    </div>
  )
}

export default Signup