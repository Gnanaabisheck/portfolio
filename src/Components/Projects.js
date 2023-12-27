import React from "react";
import { projectsData } from "../Components/ProjectsData";
import { Link } from "react-router-dom";
import { GoLinkExternal } from "react-icons/go";
import "./Stylefile.css";
import { FaCode } from "react-icons/fa";
import {
  Badge,
  Button,
  Card,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Container,
  Image,
  Row,
} from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Projects = () => {
  return (
    <div>
      <Container className="my-5">
        <h2 className="text-center py-3" id="head">
          My Works
        </h2>
        <Row>
          {projectsData.map((item) => {
            return (
              <Col md={6} key={item.id}>
                <Card
                  className="m-3 bg-black  text-white card-one"
                  style={{ height: "max-content", padding: "15px" }}
                  data-aos="flip-right"
                  data-aos-duration="900"
                  data-aos-easing="ease-in-out"
                >
                  <Image src={item.image} className="project-image" fluid />
                  <CardTitle className="p-3 "> {item.title} </CardTitle>
                  <CardText
                    className="px-2 text-capitalize"
                    style={{ lineHeight: "2em" }}
                  >
                    {item.desc}
                  </CardText>
                  <div
                    className="text"
                    style={{ display: "flex", flexWrap: "wrap" }}
                  >
                    {item.languages.map((items,i) => (
                      <Badge
                      key={i}
                        className="m-2 p-2 fs-6 lan"
                        style={{ backgroundColor: "yellow" }}
                      >
                        {items}
                      </Badge>
                    ))}
                  </div>
                  <div
                    className="live-code my-4 mx-1 text-center"
                    style={{ display: "flex", justifyContent: "space-between" ,flexWrap:'wrap'}}
                  >
                    <Link to={item.livelink}>
                      <button className=" btn btn-outline-light fw-bold m-2">
                        <GoLinkExternal className="fs-5 mx-2  fw-bold" /> Live
                        Link
                      </button>
                    </Link>
                    <Link to={item.codelink}>
                      <button className="  btn btn-outline-light fw-bold m-2">
                        <FaCode className="fs-5 mx-2 " /> Code Link
                      </button>
                    </Link>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
