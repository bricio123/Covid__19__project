import React from "react";
import { Container, Row, Col, Carousel, Card, Button } from "react-bootstrap";
import corona_one from "../assets/corona_one.png";
import corona_two from "../assets/corona_two.png";

import "./carousel.scss";

const CarouselAll = () => (
 
    <Carousel className="carousel">
      <Carousel.Item>
        <Card className=" card_all bg-transparent text-white">
          <Card.Img src={corona_one} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Carousel.Item>

      <Carousel.Item>
        <Card className=" card_all bg-transparent text-white">
          <Card.Img variant="top" src={corona_two} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Carousel.Item>

      <Carousel.Item>
        <Card className="card_all bg-transparent text-white">
          <Card.Img variant="top" src={corona_two} />
          <Card.Body className="">
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Carousel.Item>
    </Carousel>

);
export default CarouselAll;
