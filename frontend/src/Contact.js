// src/Contact.js
import React, { useState } from 'react';
import { Element } from 'react-scroll';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send email)
    console.log('Form submitted:', formData);
    // Clear form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Element name="contact" className="contact section">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <p>If you'd like to get in touch, feel free to reach out through any of the following methods:</p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:fernandojduffoo@gmail.com">fernandojduffoo@gmail.com</a></li>
          <li><strong>Phone:</strong> <a href="tel:+19043927655">904-392-7655</a></li>
          <li><strong>GitHub:</strong> <a href="https://github.com/fduffoo" target="_blank" rel="noopener noreferrer">github.com/fduffoo</a></li>
          <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/fernando-duffoo-42787078/" target="_blank" rel="noopener noreferrer">linkedin.com/in/fernando-duffoo-42787078</a></li>
        </ul>
      </div>
      <div className="contact-form-container">
        <h3>Send Me a Message</h3>
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </Element>
  );
}

export default Contact;
