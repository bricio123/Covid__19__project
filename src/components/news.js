import React from "react";
import { Container, Button, Col, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./news.scss";

const New = () => (
  <Container>
    <Col className="text-center mt-5">
      <Col className="mt-5">
        <h1>Você foi infectado pelo Corona?</h1>
        <small>
          Não se preocupe nossos médico irão entrar em contato com você. Tente
          manter distancias das pessoas
        </small>
      </Col>
      <Col className="inputs">
        <Form>
          <Form.Group controlId="formGroupEmail" className="input_form pl-4 ">
            <Form.Control
              type="email"
              placeholder="Seu E-mail.."
              className="input_send d-flex flex-column align-items-center justify-content-center px-4"
            />
            <Button type="submit" className="btn_play mb-3">
              <FontAwesomeIcon icon={faPaperPlane} size={"1x"} color={"#fff"} />
            </Button>
          </Form.Group>
        </Form>
      </Col>
    </Col>
  </Container>
);

export default New;
