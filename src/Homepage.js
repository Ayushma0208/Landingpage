import React, { useEffect, useState } from "react";
import "./Homepage.css";
import { FaWhatsapp } from "react-icons/fa";

function Homepage() {
  const images = [
    "xyzcharlize-7b49gfsgQZY-unsplash.jpg",
    "patrick-hendry-6xeDIZgoPaw-unsplash.jpg",
    "jason-mavrommatis-zAITDJYV09w-unsplash.jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="homepage">
      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/1234567890" // Replace with your WhatsApp number
        className="whatsapp-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={40} color="#25D366" />
      </a>

      {/* Hero Section */}
      <section className="hero">
        <div>
          <img
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
            className="slider-image"
          />
        </div>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Kanak Enterprises for Every Need</h1>
            <p>
              Delivering high-quality, durable, and precision-engineered
              bearings for diverse industries.
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
            <p>Designed to withstand extreme conditions and high loads.</p>
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
        <h2>About Kanak Enterprises</h2>
        <p>
          Kanak Enterprises specializes in providing premium bearings tailored to
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
  <div class="footer-content">
    <div class="quick-links">
      <h3>Quick Links</h3>
      <ul>
        <li>Our Company</li>
        <li>Contact Us</li>
        <li>Projects</li>
      </ul>
    </div>
    <div class="branches">
      <h3>Our Branches</h3>
      <ul>
        <li>Delhi NCR</li>
        <li>Bihar</li>
      </ul>
    </div>
    <div class="head-office">
      <h3>Our Head Office/Works</h3>
      <address>
        Kanak Enterprises, Plot #69-C, Sector A,<br />
        Bhopal-Hoshangabad Road (NH-46),<br />
        Mandideep-462046, Madhya Pradesh
      </address>
      <p>+91-9109120039</p>
      <p>+91-9981606757</p>
      <p>+91-9109121313</p>
      <p>Email: <a href="mailto:decg@decgintl.com">www@abc.com</a></p>
    </div>
  </div>
  <p class="footer-bottom">© 2024 Kanak Enterprises. All Rights Reserved.</p>
</footer>

    </div>
  );
}

export default Homepage;
