import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaSchool, FaUserGraduate } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init();
const About = () => {
  return (
    <div>
      <Container
        className="text-center my-3"
        data-aos="fade-down"
        data-aos-duration="900"
      >
        <h2 className="text-center my-3 py-3" id="head">
          About Me
        </h2>
        <p className="para my-3 text-capitalize">
          A skilled frontend developer having an deep knowledge in frontend
          technologies like HTML , CSS , Bootstrap JavaScript , React Js and
          Version Controller I'm a tech enthusiast who always looks into new
          tech stacks. A single word to represent me is adaptability. Loves to
          learn new technology to work on a project. do checkout my works.
        </p>
        <Link to="https://drive.google.com/file/d/12E5cMlrE38lcF2KpiUW9tborAPNdI9sH/view?usp=sharing">
          <button className="btn btn-outline-primary rounded-pill my-3 fw-bold px-4 py-2">
            View Resume
          </button>
        </Link>
      </Container>
      {/* Education */}
      <Container className="text-center my-4">
        <h2 className="text-center my-4 py-3" id="head">
          Education
        </h2>
        <Row>
          <Col md={4}>
            <div className="box" data-aos="fade-up" data-aos-duration="1000">
              <div className="icon">
                <FaSchool />
              </div>
              <div className="courses">
                <h3>SSLC</h3>
                <p>
                  PACM Higher Secondary School <br /> Rajapalayam
                </p>
                <h4>88.88 %</h4>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="box" data-aos="fade-down" data-aos-duration="1000">
              <div className="icon">
                <FaSchool />
              </div>
              <div className="courses">
                <h3>HSC</h3>
                <p>
                  PACM Higher Secondary School <br /> Rajapalayam
                </p>
                <h4>70.66 %</h4>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="box" data-aos="fade-up" data-aos-duration="1000">
              <div className="icon">
                <FaUserGraduate />
              </div>
              <div className="courses">
                <h3>UG</h3>
                <p>
                  Hindusthan College of Engineering and Technology <br />{" "}
                  Coimbatore
                </p>
                <h4>8.56 CGPA</h4>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="text-center">
        <h2 className="text-center my-3 py-3" id="head">
          Internship
        </h2>
        <p className="para my-3 text-capitalize" data-aos="fade-down">
          Did an internship in senchola technologies from (10/08/2023) to
          (30/11/2023) for frontend development role and obtained J2 grade on it
          and worked in live project gained more skills and knowledge then
          Participated in daily stand-ups and contributed to team discussions on
          project progress.
        </p>
        <h2 id="head" className="my-5" style={{lineHeight:'50px'}}>Skills obtained during the time of internship</h2>
        <div className="skills">
          <p>HTML</p>
          <p>CSS</p>
          <p>BOOTSTRAP</p>
          <p>JAVASCRIPT</p>
          <p>REACT JS</p>
          <p>REACT BOOTSTARP</p>
          <p>GIT</p>
          <p>GITHUB</p>
          <p>FIREBASE</p>
          <p>POSTMAN</p>
          <p>FRAMER MOTION</p>


        </div>
        <Link to="https://drive.google.com/file/d/1FtjatynITz-MWXIq5gch_B-PbhBtpTB7/view?usp=sharing">
          <button className="btn btn-outline-primary rounded-pill my-3 fw-bold px-4 py-2">
            View Certificate
          </button>
        </Link>
      </Container>
    </div>
  );
};

export default About;
