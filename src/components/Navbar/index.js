import React from "react";
import "./style.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Scrollspy from "react-scrollspy";

function CustomNavbar(props) {
  return (
    <Navbar className="justify-content-center" bg="dark" variant="dark">
      <Nav className="verticalText" defaultActiveKey={window.location.pathname}>
        <Scrollspy items={["section-1", "section-2", "section-3"]} currentClassName="active">
          <Nav.Item>
            <Nav.Link href="#section-1">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#section-2">Portfolio</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#section-3">Contact</Nav.Link>
          </Nav.Item>
        </Scrollspy>
      </Nav>
    </Navbar>
  );
}

export default CustomNavbar;
