import React from 'react'
import "../styles/results.css";

import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import HomePage1 from "../images/homePage1.png";
import HomePage2 from "../images/HomePage2.svg";
import ResultPageSvg from "../images/ResultPage.svg";

const Results1 = () => {
  const navigate = useNavigate();

  const button1Handler = () => {
      navigate("/analytics");
  };

  const button2Handler = () => {
      navigate("/predict");
  };

  return (
      <Container fluid>
          <Row className="homePageRow">
              <Col className="homeCol1">
                  <h1 className="resultTitleTop"> YOUR PREDICTED</h1>
                  <h1 className="resultTitle"> INCOME IS</h1>
                  <br></br>
                  <br></br>
                  <h1 className="result"> MORE THAN $50,000</h1>
              </Col>
              <Col className="homeCol2">
                  <img src={ResultPageSvg} alt="logo" className="logo" />
                  <br></br>
                  <br></br>
                  <Button
                      variant="primary"
                      className="homePageButton2"
                      onClick={button1Handler}
                  >
                      View Analytics
                  </Button>
                  <br></br>
                  <br></br>

                  <Button
                      variant="primary"
                      className="homePageButton2"
                      onClick={button2Handler}
                  >
                      Re-Enter Details
                  </Button>
              </Col>
          </Row>
      </Container>
  );
}

export default Results1