import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => (
  <Container className="py-5">
    <Row>
      <Col className="text-left p-3">
        <span className="text-light">
          Desenvolvido por{" "}
          <span className="text-warning">Fabricio de Sousa</span>
        </span>
      </Col>
      <Col className="text-center p-3">
        <strong className="text-light">
          Covid-<span className="text-warning">19</span>
        </strong>
      </Col>
      <Col className="text-right p-3">
        <strong className="text-light">
          <span className="text-warning">@fabricioDeveloper</span>
        </strong>
      </Col>
    </Row>
  </Container>
);
export default Footer;
