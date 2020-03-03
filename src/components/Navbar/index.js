import React from "react";
import "./style.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Scrollspy from "react-scrollspy";

function CustomNavbar(props) {
  return (
    <div className="alwaysTop">
      <h1 className="navName">AM</h1>
      <Navbar className="justify-content-center" variant="dark">
        <Nav defaultActiveKey={window.location.pathname}>
          {/* Scroll Spy Links*/}
          <Scrollspy
            items={["section-1", "section-2", "section-3","section-4"]}
            currentClassName="active"
            className="scrollSpy"
          >
            <Nav.Item className="verticalText">
              <Nav.Link href="#section-1">About</Nav.Link>
            </Nav.Item>
            <Nav.Item className="verticalText">
              <Nav.Link href="#section-2">Skills</Nav.Link>
            </Nav.Item>
            <Nav.Item className="verticalText">
              <Nav.Link href="#section-3">Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item className="verticalText">
              <Nav.Link href="#section-4">Contact</Nav.Link>
            </Nav.Item>
          </Scrollspy>
        </Nav>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
