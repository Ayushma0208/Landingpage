import React, { useState } from 'react';

function ContactPage() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Contact form submitted");
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Message:
          <textarea name="message" required></textarea>
        </label>
        <label>
          Attach File:
          <input type="file" onChange={handleFileChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactPage;
