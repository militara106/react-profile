import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Container from "react-bootstrap/Container";
import CustomNavbar from "./components/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <Router>
      <div>
        <Container>
          <Row>
            <Col xs={11}>
              <section id="section-1"><Home /></section>
              <section id="section-2"><Portfolio /></section>
              <section id="section-3"><Contact /></section>
              {/* <Route exact path="/" component={Home} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/contact" component={Contact} /> */}
            </Col>
            <Col xs={1}>
              <div className="fixedRight">
                <CustomNavbar />
              </div>
            </Col>
          </Row>
        </Container>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
