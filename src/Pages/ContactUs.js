import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./ContactUs.css"; // Import the CSS file you created

const ContactUs = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // You can access the form data in the formData object
    console.log("Form Data:", formData);
    props.onSubmit(formData);

    setFormData({ name: "", email: "", phoneNo: "" });
  };

  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      <Form onSubmit={handleSubmit} method="POST">
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="form-label">Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="form-label">Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="form-label">Phone No.</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Phone No."
            className="form-control"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="warning" type="submit" className="submit-button">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactUs;
