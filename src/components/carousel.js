import React from "react";
import { Container, Row, Col, Carousel, Card, Button } from "react-bootstrap";
import corona_one from "../assets/corona_one.png";
import corona_two from "../assets/corona_two.png";

import "./carousel.scss";

const CarouselAll = () => (
  <Carousel className="carousel d-flex alig-items-center py-5 carousel-inner ">
    <Carousel.Item>
      <Row className="d-flex justify-content-center">
        <Card className="card_all bg-transparent text-white mx-5">
          <Card.Img src={corona_one} className="rounded img" />
          <Card.Body className="p-0">
            <Card.Text>
              <span>Data: 20 , Mar 2020</span>
            </Card.Text>
            <Card.Title>
              Meia Maratona de São Lucas em abril cancelada em meio a
              preocupações com coronavírus
            </Card.Title>
            <Card.Text>
              A Meia Maratona de São Lucas, programada para abril, foi cancelada
              este ano como parte dos esforços contínuos para diminuir a
              propagação do coronavírus, anunciaram os organizadores na
              segunda-feira.
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Carousel.Item>

    <Carousel.Item>
      <Row className="d-flex justify-content-center">
        <Card className="card_all bg-transparent text-white mx-5">
          <Card.Img variant="top" src={corona_two} className="rounded img" />
          <Card.Body className="p-0">
            <Card.Text>
              <span>Data: 20 , Mar 2020</span>
            </Card.Text>
            <Card.Title>
              Meia Maratona de São Lucas em abril cancelada em meio a
              preocupações com coronavírus
            </Card.Title>
            <Card.Text>
              A Meia Maratona de São Lucas, programada para abril, foi cancelada
              este ano como parte dos esforços contínuos para diminuir a
              propagação do coronavírus, anunciaram os organizadores na
              segunda-feira.
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Carousel.Item>

    <Carousel.Item>
      <Row className="d-flex justify-content-center">
        <Card className="card_all bg-transparent text-white mx-5">
          <Card.Img src={corona_one} className="rounded img" />
          <Card.Body className="p-0">
            <Card.Text>
              <span>Data: 20 , Mar 2020</span>
            </Card.Text>
            <Card.Title>
              Meia Maratona de São Lucas em abril cancelada em meio a
              preocupações com coronavírus
            </Card.Title>
            <Card.Text>
              A Meia Maratona de São Lucas, programada para abril, foi cancelada
              este ano como parte dos esforços contínuos para diminuir a
              propagação do coronavírus, anunciaram os organizadores na
              segunda-feira.
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Carousel.Item>

    <Carousel.Item>
      <Row className="d-flex justify-content-center">
        <Card className="card_all bg-transparent text-white mx-5">
          <Card.Img variant="top" src={corona_two} className="rounded img" />
          <Card.Body className="p-0">
            <Card.Text>
              <span>Data: 20 , Mar 2020</span>
            </Card.Text>
            <Card.Title>
              Meia Maratona de São Lucas em abril cancelada em meio a
              preocupações com coronavírus
            </Card.Title>
            <Card.Text>
              A Meia Maratona de São Lucas, programada para abril, foi cancelada
              este ano como parte dos esforços contínuos para diminuir a
              propagação do coronavírus, anunciaram os organizadores na
              segunda-feira.
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Carousel.Item>
  </Carousel>
);
export default CarouselAll;
