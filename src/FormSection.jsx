import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const FormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
  });

  // validation
  const isNameValid = formData.name.trim().length > 0;
  const isEmailValid = /\S+@\S+\.\S+/.test(formData.email);
  const isPasswordValid = formData.password.trim().length >= 6;

  const formIsValid = isNameValid && isEmailValid && isPasswordValid;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleBlur = (e) => {
    const { id } = e.target;
    setTouched((prev) => ({ ...prev, [id]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formIsValid) {
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", password: "" });
      setTouched({ name: false, email: false, password: false });
    }
  };

  return (
    <section className="form">
      <Container className="mt-5 d-flex justify-content-center">
        <div style={{ width: "100%", maxWidth: "400px" }}>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form onSubmit={handleSubmit} noValidate>
            {/* Name Field */}
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.name && !isNameValid}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your name.
              </Form.Control.Feedback>
            </Form.Group>

            {/* Email Field */}
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.email && !isEmailValid}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email.
              </Form.Control.Feedback>
            </Form.Group>

            {/* Password Field */}
            <Form.Group className="mb-4" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.password && !isPasswordValid}
              />
              <Form.Control.Feedback type="invalid">
                Password must be at least 6 characters.
              </Form.Control.Feedback>
            </Form.Group>

            <div className="d-grid">
              <Button type="submit" disabled={!formIsValid}>
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
