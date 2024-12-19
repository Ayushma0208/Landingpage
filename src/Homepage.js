import React, { useEffect, useState } from 'react';


function HomePage() {
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?cs=srgb&dl=daylight-forest-glossy-443446.jpg&fm=jpg",
    "https://wallpaperaccess.com/full/393735.jpg",
    "https://wallup.net/wp-content/uploads/2016/03/10/318375-nature-landscape-lake-mountain-forest-wildflowers-spring-pine_trees-path-Switzerland-HDR.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); 
    return () => clearInterval(interval);
  },);

  

  return (
    <div className="homepage">
      <div className="slider">
        <img src={images[imageIndex]} alt="Slideshow" className="slider-image" />
      </div>
      {/* <div className="cta">
        <button onClick={() => alert("Credentials Requested!")}>Request Credentials</button>
        <button onClick={() => alert("You chose 'Not Interested'")}>I'm not interested</button>
      </div> */}
    </div>
  );
}

export default HomePage;
