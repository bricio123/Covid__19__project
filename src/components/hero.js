import React from 'react';
import { Container, Row, Col, Image, Modal, Button } from 'react-bootstrap';
import ImgUm from '../assets/Group_19.png';
import '../components/hero.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Hero = () => (
  <Container className='my-5 pt-5'>
    <Row xm={3} className='d-flex align-items-center'>
      <Col className='d-flex flex-column justify-content-center col-lg-4'>
        <small>Mais de 188 países são afetados por</small>
        <h1 className='m-0 p-0 display-2'>Corona</h1>
        <p className='m-0 py-4'>
          O Vírus foi relatado pela primeira vez em Wuhan, Hubel china em 17 de
          novembro de 2019, e em 11 de março 2020,a organização mundial healtch
          (OMS) Declarou o surto uma pandmia.
        </p>
        <small className='text-danger py-3'>SOBRE COVID-19</small>
      </Col>
      <Col className='d-flex flex-column  align-items-end'>
        <Image src={ImgUm} alt='covid' className='hero__img' />

        <Col className='play__button text-center d-flex flex-direction-column align-items-center justify-content-center'>
          <Col>
            <AppShow />
            <p>Veja como se proteger</p>
          </Col>
        </Col>
      </Col>
    </Row>
  </Container>
);

const ShowApp = (props) => (
  <Modal
    {...props}
    size='lg'
    > 

    <Modal.Body className='text-dark color__background' aria-labelledby='contained-modal-title-vcenter'>
      <iframe
        width='100%'
        height='400px'
        src='https://www.youtube.com/embed/5lnQmmO9kfg'
        frameborder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
    </Modal.Body>
  </Modal>
);

function AppShow() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <FontAwesomeIcon
        onClick={() => setModalShow(true)}
        icon={faPlay}
        size="1x"
        className="btn_play"
      />
      <ShowApp show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default Hero;
