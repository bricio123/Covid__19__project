import React from "react";
//importação do react
import { Container, Navbar, Row, Col } from "react-bootstrap";
//importação das variáveis
import "../_variables.scss";
//importação do estilos
import "./navbar.scss";

const navbar = () => (

  <Navbar>
    <Container>
      <Row>
        <Col className='text-left p-3'>
          <strong>Covid-<span className='text-warning'>19</span></strong>
        </Col>
        <Col className='text-right'>
          <Row className='icons_bar p-3'>
            <span id='um'></span>
            <span id='dois'></span>
            <span id='tres'></span>
          </Row>
        </Col>
      </Row>
    </Container>
  </Navbar>
);
export default navbar;
