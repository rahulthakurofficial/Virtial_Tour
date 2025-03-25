import React from "react";
import Users from "../Users/Users";
import "./Banner.scss";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner-content">
          {/* Text Section */}
          <div className="banner-text" data-aos="fade-down" data-aos-delay="500">
            <h1>Let's Explore <br /> Virtualise Your World</h1>
            <p data-aos="fade-down" data-aos-delay="600">
            Bring your imaginative world to vivid virtual life. Embark on virtual 
            opulence with India's foremost 360° tour & CGI expert, revitalizing your digital experience.
            </p>
            {/* Buttons */}
            <div className="banner-buttons" data-aos="fade-down" data-aos-delay="700">
              <button className="btn">Get it now</button>
              <a href="#">Explore Device</a>
            </div>
            <Users />
          </div>
          {/* Image Section */}
          <div className="banner-image" data-aos="fade-up" data-aos-delay="800">
            <img src="/banner-img.png" alt="Banner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
