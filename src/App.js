import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Figure from 'react-bootstrap/Figure'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
//import { Modal, Grid, Col, Row, Button } from 'react-bootstrap'
import { bio, projects } from "./content.json";

import './stylesheet.css';

const MyCard = (props) => {
  return (
      <Card style={{height:"200px"}}>
          <Card.Header>
            {props.title}
          </Card.Header>
          <div style={{overflow:"hidden", cursor:"pointer"}}>
              <Card.Img src={props.image} onClick={props.onClick}>
              </Card.Img>
          </div>
      </Card>
  )
}

const MyModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton closeLabel="close window">
        <h4>
          {props.title}
        </h4>
      </Modal.Header>
      <Modal.Body>
        <Figure style={{float:"right", width:"50%"}}>
          <Figure.Image src={props.image} style={{width:"100%"}}/>
          <Figure.Caption>{props.caption}</Figure.Caption>
        </Figure>
        {props.description.map((p) => <p>{p}</p>)}
      </Modal.Body>
    </Modal>
  )
}

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

  renderItems() {
    return this.items.map(item => {
      return (
        <Col sm={12} md={6} lg={4} className="mt-2 mb-2">
          <MyCard {...item} onClick={() => this.handleShow(item.id)}></MyCard>
          <MyModal {...item} show={this.state.show===item.id} onHide={this.handleClose}></MyModal>
        </Col>
      )
    })
  }

  render() {
    return (
      <div>
        <Navbar sticky="top" bg="light">
          <Navbar.Brand>Elliott Wise, PhD</Navbar.Brand>
          <Nav>
            <Nav.Link href="./assets/Wise_CV_historical.pdf">Curriculum Vitae</Nav.Link>
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
            {this.renderItems()}
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
