import React from "react";
import "./OurServicesPage.css"; // Add your CSS styling

const OurServicesPage = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "We build modern, responsive, and user-friendly websites tailored to your needs.",
      image: "https://th.bing.com/th/id/OIP.jZP8enDDRCcDzJ2PkXmYRwAAAA?rs=1&pid=ImgDetMain", // Replace with your image URL or path
    },
    {
      title: "Mobile App Development",
      description:
        "Our team creates innovative and efficient mobile applications for Android and iOS.",
      image: "https://th.bing.com/th/id/OIP.G7V1j4aB_YKVLO9aeMadRgHaGf?rs=1&pid=ImgDetMain", // Replace with your image URL or path
    },
    {
      title: "Digital Marketing",
      description:
        "Boost your online presence with our cutting-edge digital marketing strategies.",
      image: "https://th.bing.com/th/id/OIP.9AtYwap7v7dligcoIQo51QHaE8?rs=1&pid=ImgDetMain", // Replace with your image URL or path
    },
  ];

  return (
    <div className="services-container">
      <h1 className="title">Our Services</h1>
      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServicesPage;
