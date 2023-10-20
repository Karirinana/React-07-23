import React from 'react';
import '../css/Hobbies.css';
import { Container, Row, Col } from "react-bootstrap";
import foodie from '../assets/img/Food2.jpg';
import photo from '../assets/img/Photo1.jpg';

function Hobbies() {
  return (
      <section className='hobby' id='hobby'>
        <h2>My hobbies</h2>
        <Container>
          <Row>
            <Col>
              <div className='hobby-bx'>
                <a href="#photography">
                  <img src={photo} alt=""/>
                  <p>Photography</p>
              </a>
              </div>
            </Col>
            <Col>
              <div className='hobby-bx'>
              <a href="#foodie">
                <img src={foodie} alt=""/>
                  <p>Foodie</p>
              </a>
              </div>
            </Col>
          </Row >
        </Container>
      </section>
  )
}

export default Hobbies