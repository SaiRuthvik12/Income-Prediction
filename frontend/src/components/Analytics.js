import React from 'react'
import "../styles/analytics.css";
import { Container, Row, Col } from 'react-bootstrap';

import analysis1 from "../images/analysis1.png";
import analysis2 from "../images/analysis2.png";
import analysis3 from "../images/analysis3.png";
import analysis4 from "../images/analysis4.png";
import analysis5 from "../images/analysis5.png";

import AnalyticsSvg from "../images/AnalyticsPage.svg";

const Analytics = () => {
  return (
      <Container fluid className="containerAnalytics">
      
          <Row className="rowAnalytics">
              <Col className="colAnalytics">
                  <h1 className="titleAnalytics">Analytics</h1>
              </Col>
          </Row>

          <Row className="rowAnalytics">
              <Col className="colAnalytics">
                  <img src={AnalyticsSvg} alt="logo" className="logoAnalytics" />
              </Col>
          </Row>

          <Row className="rowAnalytics">
              <Col className="colAnalytics">
                  <img src={analysis1} alt="analysis1" className="analysisImage" />
              </Col>
          </Row>

          <Row className="rowAnalytics">
              <Col className="colAnalytics">
                  <img src={analysis2} alt="analysis2" className="analysisImage" />
              </Col>
          </Row>

          <Row className="rowAnalytics">
              <Col className="colAnalytics">
                  <img src={analysis3} alt="analysis3" className="analysisImage" />
              </Col>
          </Row>

          <Row className="rowAnalytics">
              <Col className="colAnalytics">
                  <img src={analysis4} alt="analysis4" className="analysisImage" />
              </Col>
          </Row>

          <Row className="rowAnalytics">
              <Col className="colAnalytics">
                  <img src={analysis5} alt="analysis5" className="analysisImage" />
              </Col>  
          </Row>

      </Container>
  );
}

export default Analytics