import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/technical/fox.png";
import emailjs from "@emailjs/browser";
import '../css/Contact.css'

function Contact() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const phoneRef = useRef();

  const sendEmail = () => {
    const data = {
      from_name: firstNameRef.current.value,
      from_lastName: lastNameRef.current.value,
      from_email: emailRef.current.value,
      message: messageRef.current.value,
      phone: phoneRef.current.value,
    };
    emailjs
      .send(
        "service_fiuckll",
        "template_ev2z9m3",
        data.current,
        "4Xn7nuR16n8gHXb2v"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact us" />
          </Col>
          <Col md={6}>
            <h2>Let's get in touch!</h2>
            <form action="">
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    ref={firstNameRef}
                    placeholder="First Name"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    ref={lastNameRef}
                    placeholder="Last Name"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="email" ref={emailRef} placeholder="Email" />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="tel" ref={phoneRef} placeholder="Telephone" />
                </Col>
                <Col>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="6"
                    placeholder="Message"
                    ref={messageRef}
                  ></textarea>
                  <button type="submit" onClick={sendEmail}>
                    <span>Send message</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
