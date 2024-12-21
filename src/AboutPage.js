import React from "react";
import "./AboutUsPage.css"; // Add your CSS styling

const AboutUsPage = () => {
  return (
    <div className="about-us-container">
      <h1 className="title">About Us</h1>
      <div className="content">
        {/* Section 1 */}
        <div className="section">
          <div className="text">
            <h3>Our Company</h3>
            <p>
              We are dedicated to delivering the best products and services to
              our customers. Our mission is to create meaningful solutions that
              improve lives and bring value to communities.oday DECG International having more than 300 Technical and non technical staff with ultramodern corporate office of 6000sqft with manufacturing unit 1,70,000 sqft having in-house MS casting unit, Rubber Moulding, FRP Rods & profiles, Sheared studs, Automatic Shot blasting Machine, Fabrication facility for Stainless Steel, Aluminum apart from Mild Steel. Our team includes highly qualified and experienced Bridge Bearing Designers, Matured production& Marketing managers in each Department. DECG International having world class in-house R&D & Testing laboratory.
            </p>
            <img src="https://th.bing.com/th/id/R.e585e663b33952659c13b041393f5a5f?rik=wMRmtQUXPnVTbQ&riu=http%3a%2f%2fbdhenc.com.au%2fwp-content%2fuploads%2f2013%2f11%2fBUILDINGS.jpg&ehk=hISqJxgamuji1cJoidYbY2MIRJigw3c%2fl0jk0TU8SiY%3d&risl=&pid=ImgRaw&r=0" alt="Our Team" className="image" />
          </div>
        </div>

        {/* Section 2 */}
        <div className="section reverse">
          <div className="text">
            <h3>Our Management</h3>
            <p>
              Our team consists of passionate and talented individuals from
              diverse backgrounds. Together, we work to innovate, inspire, and
              achieve greatness in everything we do.A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help the reader see the organization of the essay and grasp its main points.Although most paragraphs should have a topic sentence, there are a few situations when a paragraph might not need a topic sentence. For example, you might be able to omit a topic sentence in a paragraph that narrates a series of events, if a paragraph continues developing an idea that you introduced (with a topic sentence) in the previous paragraph, or if all the sentences and details in a paragraph clearly refer—perhaps indirectly—to a main point. The vast majority of your paragraphs, however, should have a topic sentence.
            </p>
            <img src="https://www.indiafilings.com/learn/wp-content/uploads/2016/09/Company-Management.jpg" alt="Our Office" className="image" />
          </div>
        </div>

        {/* Section 3 */}
        <div className="section">
          <div className="text">
            <h3>Our Team</h3>
            <p>
              We envision a world where technology empowers people to achieve
              their dreams and businesses to reach new heights of success. Join
              us on our journey!where the subdivisions of an essay begin and end, and thus help the reader see the organization of the essay and grasp its main points.Although most paragraphs should have a topic sentence, there are a few situations when a paragraph might not need a topic sentence. For example, you might be able to omit a topic sentence in a paragraph that narrates a series of events, if a paragraph continues developing an idea that you introduced (with a topic sentence) in the previous paragraph, or if all the sentences and details in a paragraph clearly refer—perhaps indirectly—to a main point. The vast majority of your paragraphs, however, should have a topic sentence.
            </p>
            <img src="https://th.bing.com/th/id/OIP.-meiB44IvH5njNUnlqdvdAHaFW?w=257&h=186&c=7&r=0&o=5&pid=1.7" alt="Our Vision" className="image" />
          </div>
        </div>

        {/* Section 4: Why Us? */}
        <div className="section reverse">
          <div className="text">
            <h3>Why Us?</h3>
            <p>
              We stand out because of our unwavering commitment to excellence,
              customer satisfaction, and innovation. Choosing us means gaining
              a trusted partner dedicated to your success. Experience the
              difference with us!where the subdivisions of an essay begin and end, and thus help the reader see the organization of the essay and grasp its main points.Although most paragraphs should have a topic sentence, there are a few situations when a paragraph might not need a topic sentence. For example, you might be able to omit a topic sentence in a paragraph that narrates a series of events, if a paragraph continues developing an idea that you introduced (with a topic sentence) in the previous paragraph, or if all the sentences and details in a paragraph clearly refer—perhaps indirectly—to a main point. The vast majority of your paragraphs, however, should have a topic sentence.
            </p>
            <img src="https://pdq-funding.co.uk/wp-content/uploads/2021/01/setting-business-goals.jpg" alt="Why Us?" className="image" />
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="contact-us-section">
        <h3>Do you have any query?</h3>
        <p>
          Feel free to <a href="mailto:contact@ourcompany.com">contact us</a> for more
          information. We're here to help!
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
