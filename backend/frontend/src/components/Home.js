import React from "react";
import "../styles/home.css";

import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import HomePage1 from "../images/homePage1.png";
import HomePage2 from "../images/HomePage2.svg";

const Home = () => {
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
                    <img src={HomePage1} alt="logo" className="logo" />
                    <br></br>
                    <br></br>
                    <Button
                        variant="primary"
                        className="homePageButton"
                        onClick={button1Handler}
                    >
                        View Analytics
                    </Button>
                </Col>
                <Col className="homeCol2">
                    <img src={HomePage2} alt="logo" className="logo" />
                    <br></br>
                    <br></br>
                    <Button
                        variant="primary"
                        className="homePageButton2"
                        onClick={button2Handler}
                    >
                        Predict Income
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
