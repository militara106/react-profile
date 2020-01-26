import React from "react";
import "./style.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function CustomNavbar(props) {
  return (
    <Navbar
      className="justify-content-center"
      bg="dark"
      variant="dark"
    >
      <Nav className="verticalText" defaultActiveKey={window.location.pathname}>
        <Nav.Item>
          <Nav.Link href="/">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/portfolio">Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}

export default CustomNavbar;
