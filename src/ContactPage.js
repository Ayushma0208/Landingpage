// ContactUs.js
import React, { useState } from 'react';
import './ContactUs.css'; // Optional: Add some CSS for styling

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className='location_map'>
        <a href='https://www.google.com/maps/place/Kanak+Enterprises/@23.2280418,77.4279545,14.74z/data=!4m6!3m5!1s0x397c43a0487a3ef1:0x65b1d690535d737!8m2!3d23.2276259!4d77.4306185!16s%2Fg%2F11rsrk4d9m?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D'>
          <img src='mappp.png' alt='location_map' />
        </a>
      </div>
      <div className="company-info">
        <h3>Our Company</h3>
        <p>Company Name: XYZ Corp</p>
        <p>Address: 1234 Street Name, City, State, ZIP</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@xyzcorp.com</p>
      </div>
    </div>
  );
};

export default ContactUs;
