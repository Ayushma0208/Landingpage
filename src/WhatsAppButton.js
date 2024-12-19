import React from "react";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "7869776557";
  const message = "Hello! I would like to inquire about your services.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="whatsapp-button-container">
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="whatsapp-icon"
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;
