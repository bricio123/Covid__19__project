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
} from "react-bootstrap";
//importação das variáveis
import "../_variables.scss";
//importação do estilos
import "./navbar.scss";

const navbar = () => (

    
    <div className="fixed-top  ">
      <div className='collapse' id="navbarToggleExternalContent">
        <div className="bg-dark p-4">
          <h5 className="text-white h4">Collapsed content</h5>
          <span classNames="text-muted">Toggleable via the navbar brand.</span>
        </div>
      </div>
      <nav className="navbar navbar-dark bg-dark">
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
        <Col className='text-right p-3'>
          <strong>Covid-<span className='text-warning'>19</span></strong>
        </Col>
      </nav>
      
    </div>
  
);
export default navbar;
