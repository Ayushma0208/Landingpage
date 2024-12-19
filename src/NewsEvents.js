import React from "react";
import "./NewsAndEventsPage.css"; // Add your CSS styling

const NewsAndEventsPage = () => {
  const newsAndEvents = [
    {
      title: "Tech Conference 2024",
      description:
        "Join us at the annual Tech Conference where industry leaders share insights on the latest advancements in technology.",
      image: "https://img.freepik.com/premium-photo/tech-conference-networking-sharing-innovative-ideas_875722-30625.jpg", // Replace with your image URL or path
      date: "March 15, 2024",
    },
    {
      title: "Green Energy Summit",
      description:
        "Discover innovative green energy solutions at the Green Energy Summit. Let's build a sustainable future together.",
      image: "https://th.bing.com/th/id/OIP.7jmr5tlZIUjIWMK42RcSJwAAAA?rs=1&pid=ImgDetMain", // Replace with your image URL or path
      date: "April 10, 2024",
    },
    {
      title: "Community Outreach Program",
      description:
        "Our annual Community Outreach Program focuses on giving back and supporting local communities through various initiatives.",
      image: "https://th.bing.com/th/id/OIP.xLwjF2b-U7ttbQXc0Le6XwHaDt?rs=1&pid=ImgDetMain", // Replace with your image URL or path
      date: "May 25, 2024",
    },
  ];

  return (
    <div className="news-events-container">
      <h1 className="title">News and Events</h1>
      <div className="news-events-list">
        {newsAndEvents.map((item, index) => (
          <div className="news-event-card" key={index}>
            <img
              src={item.image}
              alt={item.title}
              className="news-event-image"
            />
            <h2 className="news-event-title">{item.title}</h2>
            <p className="news-event-date">{item.date}</p>
            <p className="news-event-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsAndEventsPage;
