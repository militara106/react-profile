import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Container from "react-bootstrap/Container";
import CustomNavbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Container>
        <CustomNavbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Container>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
