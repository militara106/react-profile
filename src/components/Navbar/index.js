import React from "react";
import "./style.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Scrollspy from "react-scrollspy";

function CustomNavbar(props) {
  return (
    <div>
      <Navbar className="justify-content-center" bg="dark" variant="dark">
        <Nav defaultActiveKey={window.location.pathname}>
          {/* Scroll Spy Links*/}
          <Scrollspy
            items={["section-1", "section-2", "section-3"]}
            currentClassName="active"
          >
            <Nav.Item className="verticalText">
              <Nav.Link href="#section-1">About</Nav.Link>
            </Nav.Item>
            <Nav.Item className="verticalText">
              <Nav.Link href="#section-2">Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item className="verticalText">
              <Nav.Link href="#section-3">Contact</Nav.Link>
            </Nav.Item>
          </Scrollspy>
        </Nav>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
