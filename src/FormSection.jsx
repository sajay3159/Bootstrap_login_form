import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const FormSection = () => {
  return (
    <section className="form">
      <Container className="mt-5 d-flex justify-content-center">
        <div style={{ width: "100%", maxWidth: "400px" }}>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>

            <div className="d-grid">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </section>
  );
};

export default FormSection;
