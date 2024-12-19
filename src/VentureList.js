import React from "react";
import "./OurVenturesPage.css"; // Add your CSS styling

const OurVenturesPage = () => {
  const ventures = [
    {
      title: "Tech Innovators",
      description:
        "Tech Innovators is our flagship venture, driving cutting-edge technology solutions for businesses worldwide.",
      image: "https://th.bing.com/th/id/OIP.w60gsuJ5Wn4U0JFRjRB-BgHaDg?rs=1&pid=ImgDetMain", // Replace with your image URL or path
    },
    {
      title: "Green Future",
      description:
        "Green Future is focused on sustainable energy solutions to promote a cleaner and greener planet.",
      image: "https://th.bing.com/th/id/OIP.0-INQC7STwW-FMb4RmcxgQHaE8?rs=1&pid=ImgDetMain", // Replace with your image URL or path
    },
    {
      title: "EduCare",
      description:
        "EduCare empowers learners with modern educational tools and resources, bridging the gap in global education.",
      image: "https://th.bing.com/th/id/OIP.2R1eGBjCv0COu7Sgs9pTpQHaDh?rs=1&pid=ImgDetMain", // Replace with your image URL or path
    },
  ];

  return (
    <div className="ventures-container">
      <h1 className="title">Our Ventures</h1>
      <div className="ventures-list">
        {ventures.map((venture, index) => (
          <div className="venture-card" key={index}>
            <img
              src={venture.image}
              alt={venture.title}
              className="venture-image"
            />
            <h2 className="venture-title">{venture.title}</h2>
            <p className="venture-description">{venture.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurVenturesPage;
