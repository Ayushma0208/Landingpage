import React from "react";
import "./OurServicesPage.css"; // Add your CSS styling

const OurServicesPage = () => {
  const services = [
    {
      title: "Bridge Construction",
      description:
        "Kanak Enterprises has positioned itself as a leader in bridge construction, delivering high-quality infrastructure solutions for critical projects across India. Our expertise spans the design, manufacture, and supply of advanced expansion joints, elastomeric bearings, viscous dampers, and high-strength couplers, supporting some of India’s most ambitious bridge projects.",
      image: "https://sanfieldindia.in/upload/Izmit%20Bay%20Bridge%20Turkey.jpg", // Replace with your image URL or path
    },
    {
      title: "Installation Services",
      description:
        "Kanak Enterprises stands at the forefront of installation services, delivering exceptional expertise for large-scale infrastructure projects. With a commitment to quality and precision, MSIL provides end-to-end installation solutions, covering every stage from planning and logistics to on-site implementation and final testing.",
      image: "https://sanfieldindia.in/upload/modular-expansion-joint.png", // Replace with your image URL or path
    },
    {
      title: "Bridge Expansion and Monitoring",
      description:
        "Kanak Enterprises offers expert services & consultancy to ascertain the state of the structure and necessary repairs and rehabilitation measure that needs to be undertaken for its retrofit. In addition we also offer complete health monitoring solution and documentation of all our products for bridges and other heavy structures including their appurtenances",
      image: "https://sanfieldindia.in/upload/MDTA-Annual-Facilities-Inspection-I-395-Underbridge-450x600.jpg", // Replace with your image URL or path
    },
    {
      title: "Customer Support",
      description:
        "Kanak Enterprises provides exceptional customer support services, ensuring client satisfaction across all projects. Our support team is committed to addressing client needs swiftly and efficiently, assisting at every project stage – from planning and design to deployment and maintenance. With a strong focus on delivering high-quality support,",
      image: "https://sanfieldindia.in/upload/DK_CustomerserviceCategory_Hero_3200x1800_1.jpg", // Replace with your image URL or path
    },
    {
      title: "Installation Supervision",
      description:
        "Kanak Enterprises provides exceptional customer support services, ensuring client satisfaction across all projects. Our support team is committed to addressing client needs swiftly and efficiently, assisting at every project stage – from planning and design to deployment and maintenance. With a strong focus on delivering high-quality support,",
      image: "https://sanfieldindia.in/upload/precast7.png", // Replace with your image URL or path
    },
    {
      title: "Schematic Design",
      description:
      "Kanak Enterprises provides exceptional customer support services, ensuring client satisfaction across all projects. Our support team is committed to addressing client needs swiftly and efficiently, assisting at every project stage – from planning and design to deployment and maintenance. With a strong focus on delivering high-quality support,",
      image: "https://sanfieldindia.in/upload/Civil-engineers.jpg", // Replace with your image URL or path
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
