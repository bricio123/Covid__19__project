import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../components/cards.scss";

const card = () => (
  <Container>
    <Row className="py-5 ">
      <Col className="card_one">
        <h3>3,17,309 +</h3>
        <small>Total de casos</small>
      </Col>
      <Col className="card_two">
        <h3>13,643 +</h3>
        <small>Total de mortos</small>
      </Col>
      <Col className="card_three">
        <h3>96,010 +</h3>
        <small>Total de record</small>
      </Col>
      <Col className="card_four">
        <h5 className="">
          <span className="dote"></span> Atualização ao vivo
        </h5>
        <strong>Brasil fechou as fronteiras</strong>
        <p>
          Se você tem um sério subjacente condição de saúde, ficar em casa e
          longe dos outros.
        </p>
      </Col>
    </Row>
  </Container>
);
export default card;
