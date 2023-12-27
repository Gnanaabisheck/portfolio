import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import './Stylefile.css'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Contact = () => {
  const [msg, setMsg] = useState({ name: "", email: "", mobno: "", msg: "" });

  async function handleSubmit() {
    
  }
  return (
    <div>
      <Container className="mt-5">
        <h3 className="text-center" id="head">Contact Me</h3>
        <Row>
          <Col
          data-aos="flip-left"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
            className="my-3"
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "20px",
            }}
            id="contact"
          >
            <input
              type="text"
              placeholder="Enter Your Name"
              onChange={(e) =>
                setMsg((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <input
              type="text"
              placeholder="Enter Your Email"
              onChange={(e) =>
                setMsg((prev) => ({ ...prev, email: e.target.value }))
              }
            />
            <input
              type="text"
              placeholder="Enter Your Mobile Number"
              onChange={(e) =>
                setMsg((prev) => ({ ...prev, mobno: e.target.value }))
              }
            />
            <textarea
              name="message"
              id=""
              cols="10"
              rows="5"
              placeholder="Type your message here"
              onChange={(e) =>
                setMsg((prev) => ({ ...prev, msg: e.target.value }))
              }
            ></textarea>
            <button className=" my-3 p-2 fw-bolder fs-5" onClick={handleSubmit}>
              Send
            </button>
            <div className="links-icon fs-1 " style={{display:'flex',justifyContent:'space-around',marginLeft:'-30px'}}>
                             <Link to='https://www.linkedin.com/in/gnanaabisheck-g/'>
                             <FaLinkedin className='text-light'/>
                             </Link>
                              <Link to='https://github.com/Gnanaabisheck?tab=repositories'>
                              <FaGithub className='text-light'/>
                              </Link>
                             
                            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
