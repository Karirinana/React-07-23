import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import TextField from '@mui/material/TextField';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8j43zwh', 'template_au6qsld', form.current, '4Xn7nuR16n8gHXb2v')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
{/*       <label>Name</label> <br />
      <input type="text" name="from_name" /> <br /> */}
      <br />
      <TextField label="Name" variant="outlined" name="from_name" type="text"/>
      <br /> <br />
{/*       <label>Email</label> <br />
      <input type="email" name="from_email" /> */}
      <TextField label="Email" variant="outlined" name="from_email" type="text"/>
       <br /> <br />
{/*       <label>Message</label> <br />
      <textarea name="message" /> <br /> */}
      <TextField label="Message" variant="outlined" name="message" type="text"/>
      <br /> <br />
      <input type="submit" value="Send" /> <br />
    </form>
  );
};