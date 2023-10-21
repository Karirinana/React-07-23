import React, { useState } from "react";
import "../css/NavigationBar.css";
import Container from "react-bootstrap/Container";
import { HashLink } from 'react-router-hash-link';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navIcon1 from "../assets/img/technical/nav-icon1.svg";
import navIcon2 from "../assets/img/technical/nav-icon2.svg";
import navIcon3 from "../assets/img/technical/nav-icon3.svg";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const scrolled = useState(false);
  

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img className="logo" src="logo.png" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={
                activeLink === "about" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#project"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#hobby"
              className={
                activeLink === "hobbies" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("hobbies")}>
              Hobbies
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/karina-deroseva">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100005517555747">
                <img src={navIcon2} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/der_karina/">
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            <HashLink to='#connect'>
              <button
                className="contactMe"
                onClick={() => console.log("connect")}>
                <span>Let's Connect</span>
              </button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
