import React from "react";
//importação do react
import {
  Container,
  Navbar,
  Row,
  Col,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
//importação das variáveis
import "../_variables.scss";
//importação do estilos
import "./navbar.scss";

const navbar = () => (
  <div className="fixed-top color__background">
    <div className="collapse text-center" id="navbarToggleExternalContent">
      <Navbar>
        <Navbar.Brand href="#home">
          <Col className="text-right p-3">
            <strong className="text-light">
              Covid-<span className="text-warning">19</span>
            </strong>
          </Col>
        </Navbar.Brand>
        <Nav className="mr-auto font-weight-light">
          <Nav.Link className="text-light">Inicio</Nav.Link>
          <Nav.Link className="text-light">Numero de Casos</Nav.Link>
          <Nav.Link className="text-light">Cuidados</Nav.Link>
          <Nav.Link className="text-light">Sintomas</Nav.Link>
          <Nav.Link className="text-light">Contato</Nav.Link>
          <Nav.Link className="text-light">Blog</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Procurar..."
            className="mr-sm-2"
          />
          <Button>Pesquisar</Button>
        </Form>
      </Navbar>
    </div>
    <nav className="navbar navbar-dark bg-red">
      <span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-align-right navbar-toggler-icon"></i>
        </button>
      </span>
      <Col className="text-right p-3">
        <strong>
          Covid-<span className="text-warning">19</span>
        </strong>
      </Col>
    </nav>
  </div>
);
export default navbar;
