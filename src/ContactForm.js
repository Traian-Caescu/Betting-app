import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    // Name validation
    if (!formData.name) {
      formIsValid = false;
      errors["name"] = "Please enter your name.";
    }

    // Email validation
    if (!formData.email) {
      formIsValid = false;
      errors["email"] = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formIsValid = false;
      errors["email"] = "Email is not valid.";
    }

    // Phone validation - simple example, adjust regex as needed
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      formIsValid = false;
      errors["phone"] = "Phone number is not valid. Must be 10 digits.";
    }

    // Message validation
    if (!formData.message) {
      formIsValid = false;
      errors["message"] = "Please enter your message.";
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      setSubmitted(true);
      // Here you would typically send the data to a server
    }
  };

  return (
    <section className="contact-form">
      <h2>Contact Us</h2>
      {submitted ? (
        <p>Thank you for your message, {formData.name}!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone Number (optional)"
          />
          {errors.phone && <p className="error">{errors.phone}</p>}

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject (optional)"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          />
          {errors.message && <p className="error">{errors.message}</p>}

          <button type="submit">Send Message</button>
        </form>
      )}
    </section>
  );
};

export default ContactForm;
