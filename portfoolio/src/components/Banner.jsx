import React, { useEffect, useState } from "react";
import "../css/Banner.css";
import { ArrowRightCircle } from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import headerImg from "../assets/img/technical/rabbit.png";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Web Developer", "Photographer", "Foodie"];
  const period = 1000;

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delta, text]);

  return (
    <div>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>
                {"Hi! My name is Karina and I am "}
                <span className="wrap">{text}</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse a orci gravida, dictum sapien ac, malesuada arcu.
                Duis tincidunt rhoncus bibendum. Vivamus bibendum in ipsum sed
                tempus. Integer in vulputate nunc. Aenean id turpis vitae tellus
                maximus scelerisque a et sapien. Nulla vehicula id turpis ac
                interdum. Interdum et malesuada fames ac ante ipsum primis in
                faucibus. Pellentesque eu arcu sit amet metus interdum laoreet
                sed eu nisi. Maecenas at imperdiet erat. Sed suscipit sed dolor
                aliquet bibendum. Nulla facilisi. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis
                egestas. Morbi sed erat eros. Vivamus varius eleifend metus,
                eget maximus tellus molestie finibus. Duis tincidunt urna odio,
                at iaculis tellus vestibulum elementum. Nulla elit nisi,
                consequat in facilisis gravida, consequat nec lacus. 
              </p>
              <button onClick={() => console.log("connect")}>
                Let's connect
                <ArrowRightCircle size={25} />
              </button>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt="Headder Img" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Banner;
