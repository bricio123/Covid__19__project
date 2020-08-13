import React from "react";
import {
  Container,
  Col,
  Image,
  Popover,
  OverlayTrigger,
  Button,
} from "react-bootstrap";
import ImgEfec from "../assets/country.svg";
import Brazil from "../assets/brasil.png";
import "./Effected.scss";

const Effect = () => (
  <Container className="country_img">
    <Col className="pt-5">
      <h3 className="pt-5">Mais de 188 Estados contaminado pelo Corona.</h3>
      <Col>
        <Image src={ImgEfec} className="country_img" />
        <Example />
      </Col>
    </Col>
  </Container>
);
const popover = (
  <Popover id="popover-basic">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31760556.412286285!2d-69.7268097785154!3d-13.656483636907424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c59c7ebcc28cf%3A0x295a1506f2293e63!2sBrasil!5e0!3m2!1spt-BR!2sbr!4v1597278085294!5m2!1spt-BR!2sbr"
      width="250"
      height="250"
    ></iframe>
  </Popover>
);

const Example = () => (
  <OverlayTrigger
    trigger="click"
    placement="right"
    overlay={popover}
    placement="left"
    containerPadding={20}
  >
    <Image src={Brazil} className="flag__brazil" />
  </OverlayTrigger>
);

export default Effect;
