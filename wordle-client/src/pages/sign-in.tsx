import React from 'react';
import { Modal, Form, Button, Container, Row, Col } from 'react-bootstrap';

function SignIn() {

  return (
    <Modal show={true} >
    <Modal.Header closeButton>
      <Modal.Title>Log in</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={6}>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Log in
              </Button>
            </Form>
            <p className="text-center mt-3">
              Don't have an account?{' '}
              <a href="#">
                Sign up
              </a>
            </p>
            <p className="text-center mt-3">
              Or log in with{' '}
              <a href="#">
                Google
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </Modal.Body>
  </Modal>
);
}

export default SignIn;