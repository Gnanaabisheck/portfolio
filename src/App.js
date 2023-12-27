import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Anchor from "./Components/Anchor";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col sm={2} md={12} lg={3} xm={12} xxl={3}>
            <Anchor />
          </Col>
          <Col sm={10} md={12} lg={9} xm={12} xxl={9}>
           
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/project" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <hr />
            <Footer/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
