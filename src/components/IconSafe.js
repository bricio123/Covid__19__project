import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import one from "../assets/Group_21.png";
import two from "../assets/Group_22.png";
import three from "../assets/Group_23.png";
import four from "../assets/Group_24.png";
import five from "../assets/Group_25.png";
import six from "../assets/Group_26.png";
import seven from "../assets/Group_27.png";

const IconSafe = () => (
  <section>
    <Container >
      <Col className='mb-5'>
        <Row className="my-5">
          <h2 className="py-5">COMO SALVAR SUA VIDA?</h2>
        </Row>
        <Col className='d-flex flex-column justify-content-center'  md={12} xm={6}>
        <Row>
          <Col className="mb-5 d-flex flex-column justify-content-center align-items-center" >
            <p>Lave suas mãos</p>
            <Image src={one} />
          </Col>
          <Col className="mb-5 d-flex flex-column justify-content-center align-items-center" >
            <p>Use máscara</p>
            <Image src={two} />
          </Col>
          <Col className="mb-5 d-flex flex-column justify-content-center align-items-center" >
            <p>Não tenha contato Humano</p>
            <Image src={three} />
          </Col>
          <Col className="mb-5 d-flex flex-column justify-content-center align-items-center" >
            <p>Evite grupos</p>
            <Image src={four} />
          </Col>
        </Row>
        <Row>
          <Col className="mt-5 d-flex flex-column justify-content-center align-items-center" >
            <p>Evite animais</p>
            <Image src={five} />
          </Col>
          <Col className="mt-5 d-flex flex-column justify-content-center align-items-center" >
            <p>Mantenha distancia das pessoas</p>
            <Image src={six} />
          </Col>
          <Col className="mt-5 d-flex flex-column justify-content-center align-items-center" >
            <p>Cozinhe bem</p>
            <Image src={seven} />
          </Col>
        </Row>
        </Col>
      </Col>
    </Container>
  </section>
);
export default IconSafe;
