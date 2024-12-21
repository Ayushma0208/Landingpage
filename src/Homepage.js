import React from "react";
import Slider from "react-slick"; // Import react-slick for carousel
import "./Homepage.css";

function Homepage() {
  // Slider settings for the hero section
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        {/* Image Slider */}
        <Slider {...sliderSettings} className="hero-slider">
          <div>
            <img
              src="https://th.bing.com/th/id/OIP.0iX5z6qZJqh_jz59qkbMnAHaD3?rs=1&pid=ImgDetMain"
              alt="Slide 1"
              className="slider-image"
            />
          </div>
          <div>
            <img
              src="https://th.bing.com/th/id/OIP.AzmDj4J84-J27c5RQBh3gQHaD3?rs=1&pid=ImgDetMain"
              alt="Slide 2"
              className="slider-image"
            />
          </div>
          <div>
            <img
              src="https://okcredit-blog-images-prod.storage.googleapis.com/2021/02/construction3.jpg"
              alt="Slide 3"
              className="slider-image"
            />
          </div>
        </Slider>

        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Precision Bearings for Every Need</h1>
            <p>
              Delivering high-quality, durable, and precision-engineered bearings for diverse industries.
            </p>
            <button className="cta-btn">Explore Our Products</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Expertise</h2>
        <div className="services-container">
          <div className="service">
            <img
              src="https://th.bing.com/th/id/OIP.4MRDtDvtYn5lMfiuwgIqiAHaFS?rs=1&pid=ImgDetMain"
              alt="Service 1"
              className="service-image"
            />
            <h3>Custom Bearings</h3>
            <p>Tailored solutions to meet specific industrial requirements.</p>
          </div>
          <div className="service">
            <img
              src="https://th.bing.com/th/id/OIP.gOFF24QP76SZRwXrkciEIAAAAA?rs=1&pid=ImgDetMain"
              alt="Service 2"
              className="service-image"
            />
            <h3>High-Performance Bearings</h3>
            <p>
              Designed to withstand extreme conditions and high loads.
            </p>
          </div>
          <div className="service">
            <img
              src="https://image.shutterstock.com/image-photo/modernization-highway-bridge-260nw-246439450.jpg"
              alt="Service 3"
              className="service-image"
            />
            <h3>Industrial Bearings</h3>
            <p>
              Reliable and durable bearings for a wide range of applications.
            </p>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients">
        <h2>Our Trusted Clients</h2>
        <div className="clients-container">
          <img
            src="https://www.pngkit.com/png/detail/155-1559447_l-t-logo-svg-l-t-hydrocarbon-engineering.png"
            alt="Client 1"
            className="client-logo"
          />
          <img
            src="https://th.bing.com/th/id/R.a8b7d5f7e3eba94c038270e23f725656?rik=bEcZS%2bWHPnRYWw&riu=http%3a%2f%2fwww.carlogos.org%2flogo%2fTata-Group-logo-3840x2160.png&ehk=hgeXoJOSk5BseLq4TpyGVq%2fvJqUT3SQInDY3pMwEIAk%3d&risl=&pid=ImgRaw&r=0"
            alt="Client 2"
            className="client-logo"
          />
          <img
            src="https://th.bing.com/th/id/OIP.gfY6emAaFhHmDCeCaYRonAHaEK?rs=1&pid=ImgDetMain"
            alt="Client 3"
            className="client-logo"
          />
          <img
            src="https://th.bing.com/th/id/OIP.X09hXOhs1ifDJIkyBCc1fAHaEO?rs=1&pid=ImgDetMain"
            alt="Client 4"
            className="client-logo"
          />
          <img
            src="https://th.bing.com/th/id/OIP.8R12LQfde1LgpaliyMglLwHaEN?rs=1&pid=ImgDetMain"
            alt="Client 5"
            className="client-logo"
          />
          <img
            src="https://th.bing.com/th/id/OIP.zRZreT9kONbO5hbu7WjIxQHaEH?rs=1&pid=ImgDetMain"
            alt="Client 6"
            className="client-logo"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Ceco Bearings</h2>
        <p>
          Ceco Bearings specializes in providing premium bearings tailored to
          the unique needs of our customers. With a commitment to quality and
          precision, we support industries across the globe with innovative
          solutions.
        </p>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="cta-btn">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2024 Kanak Enterprises. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Homepage;
