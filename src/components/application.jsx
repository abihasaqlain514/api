// src/components/application.jsx
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBValidation,
  MDBValidationItem,
  MDBCardImage
} from 'mdb-react-ui-kit';
import './application.css'; // Ensure this path is correct

const Application = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    image: null
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const validate = () => {
    let errors = {};
    
    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted successfully', formData);
      setSubmitted(true);
    }
  };

  return (
    <MDBContainer className="application-container">
      <MDBCard className="application-card">
        <MDBCardHeader className="application-header">
          <h4>
            <MDBIcon icon="user-plus" className="me-2" />
            Register
          </h4>
        </MDBCardHeader>
        <MDBCardBody>
          {submitted ? (
            <h5 className="application-success">Registration Successful!</h5>
          ) : (
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <MDBValidation>
                <MDBValidationItem feedback={errors.name} invalid>
                  <MDBInput
                    label="Your Name"
                    id="form1"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="application-input"
                  />
                </MDBValidationItem>

                <MDBValidationItem feedback={errors.email} invalid>
                  <MDBInput
                    label="Your Email"
                    id="form2"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="application-input"
                  />
                </MDBValidationItem>

                <MDBValidationItem feedback={errors.password} invalid>
                  <MDBInput
                    label="Password"
                    id="form3"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="application-input"
                  />
                </MDBValidationItem>

                <MDBValidationItem feedback={errors.confirmPassword} invalid>
                  <MDBInput
                    label="Confirm Password"
                    id="form4"
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="application-input"
                  />
                </MDBValidationItem>

                <MDBValidationItem feedback={errors.image} invalid>
                  <MDBInput
                    label="Profile Image"
                    id="form5"
                    type="file"
                    name="image"
                    onChange={handleChange}
                    className="application-input"
                  />
                </MDBValidationItem>

                <MDBCardImage
                  src='https://mdbcdn.b-cdn.net/img/photos/new-tamplates/botstrap-registration/pandaaa.webp'
                  fluid
                />

                <div className="text-center mt-4">
                  <MDBBtn type="submit" className="application-button">
                    Register
                  </MDBBtn>
                </div>
              </MDBValidation>
            </form>
          )}
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default Application;
