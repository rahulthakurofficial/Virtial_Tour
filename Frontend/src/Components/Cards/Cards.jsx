import React from "react";
import "./Cards.scss";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      staggerChildren: 0.3,
    },
  },
};

const testimonials = [
  {
    id: 1,
    // name: "Rahul",
    role: "360° Digital Staging",
    feedback:"Whether it’s a residential home, commercial property, or hospitality space...",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    // name: "Abhishek",
    role: "360° Digital Renovation",
    feedback: "Experience the future of interior design with our exclusive 360° Digital Transformation service...",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    // name: "Aditya",
    role:  "Digital 360° CGI VR Tour",
    feedback: "Step into the future of real estate with our cutting-edge 360° CGI technology...",
    image: "https://via.placeholder.com/100",
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          {/* <img src="/vr.webp" alt="VR" className="vr-image" style={{ width: "200px", borderRadius: "40px" , marginLeft:"1100px"}} /> */}
          <h1>
            <motion.b whileHover={{ color: "orange" }}>
              Customized Solutions:
            </motion.b>{" "}
            Transforming
          </h1>
        </div>
        <div className="title button-container">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Virtual </motion.b>
            Spaces into Reality
          </h1>
          <button className="what-we-do-button">What We Do?</button>
        </div>
      </motion.div>
      <div className="testimonial-wrapper">
        {testimonials.map((testimony) => (
          <div key={testimony.id} className="testimonial-cards">
            <div className="testimonial-front">
              <img src={testimony.image} alt={testimony.name} />
              <h3>{testimony.name}</h3>
              <p>{testimony.role}</p>
            </div>
            <div className="testimonial-back">
              <p>"{testimony.feedback}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
