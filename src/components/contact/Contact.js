import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Contact = (props) => {
  return (
    <div style={{ height: "90vh" }}>
      <Container className="h-100">
        <Row style={{ alignItems: "center", height: "100%" }}>
          <Col md={7}>
            <Row>
              <Col md={8}>
                <h1 className="mb-5">Contact Us</h1>
                <div>
                  Need to get in touch with us? Either fill out the form with
                  your inquiry or find the department email you would like to
                  contact below.
                </div>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col md={12}>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>What can we help you with?</Form.Label>
                      <Form.Control as="textarea" />
                    </Form.Group>
                    <Button className="w-100">Submit</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
