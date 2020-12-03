import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
//import { Modal, Grid, Col, Row, Button } from 'react-bootstrap'

import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import CV from './CV';

import { bio, projects } from "./content.json";
import './stylesheet.css';

class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: null
    };

    this.items = projects;
  }

  handleClose() {
    this.setState({show: null});
  }

  handleShow(id) {
    this.setState({show: id});
  }

  renderProjects() {
    return this.items.map((item,j) => {
      return (
        <Col sm={12} md={6} lg={4} className="mt-2 mb-2">
          <ProjectCard {...item} onClick={() => this.handleShow(j)}></ProjectCard>
          <ProjectModal {...item} id={"modal-"+j} show={this.state.show===j} onHide={this.handleClose}></ProjectModal>
        </Col>
      )
    })
  }

  renderCV() {
    return (
      <Modal size="lg" show={this.state.show===-1} onHide={this.handleClose}>
        <Modal.Header closeButton closeLabel="close window">
          <a href="./assets/Wise_CV_historical.pdf" download>Download as PDF</a>
        </Modal.Header>
        <Modal.Body>
          <CV/>
        </Modal.Body>
      </Modal>
    )
  }

  render() {
    return (
      <div>
        <Navbar sticky="top" bg="light">
          <Navbar.Brand>Elliott Wise, PhD</Navbar.Brand>
          <Nav>
            <Nav.Link onClick={() => this.handleShow(-1)}>
              Curriculum Vitae
            </Nav.Link>
            {this.renderCV()}
            <Nav.Link href="https://github.com/ellwise/">GitHub Profile</Nav.Link>
            <Nav.Link href="https://scholar.google.co.uk/citations?user=5LE79rcAAAAJ&hl=en">Google Scholar</Nav.Link>
            <Nav.Link href="http://maps.ellwise.com">Custom Metro Map</Nav.Link>
          </Nav>
        </Navbar>
        <Container>
          <Row className="mt-4">
            <Col>
              {bio.map((p) => <p>{p}</p>)}
            </Col>
          </Row>
          <Row>
            {this.renderProjects()}
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
