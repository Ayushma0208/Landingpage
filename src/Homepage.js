import React, { useEffect, useState } from "react";
// import "./HomePage.css"; // Add a CSS file for styling

function HomePage() {
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    {
      url: "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?cs=srgb&dl=daylight-forest-glossy-443446.jpg&fm=jpg",
      text: "Explore the Serenity of Nature",
    },
    {
      url: "https://wallpaperaccess.com/full/393735.jpg",
      text: "Experience the Beauty of the Wild",
    },
    {
      url: "https://wallup.net/wp-content/uploads/2016/03/10/318375-nature-landscape-lake-mountain-forest-wildflowers-spring-pine_trees-path-Switzerland-HDR.jpg",
      text: "Unwind in Scenic Landscapes",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage">
      <div className="slider">
        <img
          src={images[imageIndex].url}
          alt="Slideshow"
          className="slider-image"
        />
        <div className="text-overlay">
          <p>{images[imageIndex].text}</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
