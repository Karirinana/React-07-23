import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactUs2() {
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const sendEmail = () => {
        const data = {
            from_name: nameRef.current.value,
            from_email: emailRef.current.value,
            message: messageRef.current.value
        }
        emailjs.send('service_8j43zwh', 'template_au6qsld', data.current, '4Xn7nuR16n8gHXb2v')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        
    }

  return (
    <div>
        <label>Name</label> <br />
        <input type="text" ref={nameRef}/> <br />
        <label>Email</label> <br />
        <input type="text" ref={emailRef}/> <br />
        <label></label> <br />
        <textarea name="" id="" cols="30" rows="10" ref={messageRef}></textarea> <br />
        <button onClick={sendEmail}></button>
    </div>
  )
}

export default ContactUs2