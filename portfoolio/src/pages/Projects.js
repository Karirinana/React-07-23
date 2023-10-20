import React from "react";
import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import "../css/Projects.css";

function Projects() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <div className="project-bx">
              <h2>Links to my projects</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="project-slider"
              >
                <div className="projects">
                  <a href="https://joogipood-5f772.web.app/">
                    <p>Drinks shop</p>
                  </a>
                </div>
                <div className="projects">
                  <a href="https://karina-07-23.web.app/">
                    <p>Webshop ee</p>
                  </a>
                </div>
                <div className="projects">
                  <a href="https://webshop-hobby-lobby.web.app/">
                    <p>Weshop eng</p>
                  </a>
                </div>
                <div className="projects">
                  <a href="https://persons12345.web.app/">
                    <p>Newspaper</p>
                  </a>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
