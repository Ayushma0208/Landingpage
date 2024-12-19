import React from "react";
import "./AboutUsPage.css"; // Add your CSS styling

const AboutUsPage = () => {
  return (
    <div className="about-us-container">
      <h1 className="title">About Us</h1>
      <div className="content">
        {/* Section 1 */}
        <div className="section">
          <img
            src="https://th.bing.com/th/id/OIP.gstLb1jnX5Hnpfpy10DJvgHaEK?rs=1&pid=ImgDetMain"
            alt="Our Team"
            className="image"
          />
          <div className="text">
            <h2>Our Mission</h2>
            <p>
              We are dedicated to delivering the best products and services to
              our customers. Our mission is to create meaningful solutions that
              improve lives and bring value to communities.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="section reverse">
          <div className="text">
            <h2>Our Team</h2>
            <p>
              Our team consists of passionate and talented individuals from
              diverse backgrounds. Together, we work to innovate, inspire, and
              achieve greatness in everything we do.
            </p>
          </div>
          <img
            src="https://img.freepik.com/premium-photo/office-team_1153477-224.jpg"
            alt="Our Office"
            className="image"
          />
        </div>

        {/* Section 3 */}
        <div className="section">
          <img
            src="https://th.bing.com/th/id/OIP.Pm3Wq_Fokt3nTg0fcuelhQHaE8?rs=1&pid=ImgDetMain"
            alt="Our Vision"
            className="image"
          />
          <div className="text">
            <h2>Our Vision</h2>
            <p>
              We envision a world where technology empowers people to achieve
              their dreams and businesses to reach new heights of success. Join
              us on our journey!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;

