import React, { useState } from 'react';
import TestimonialCard from './TestimonialCard';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Testimonial.scss'; 
import  './Reviews';

const Testimonial = ({ Reviews }) => {
  const [index, setIndex] = useState(0);

  const leftShiftHandler = () => {
    setIndex(index - 1 < 0 ? Reviews.length - 1 : index - 1);
  };

  const rightShiftHandler = () => {
    setIndex(index + 1 >= Reviews.length ? 0 : index + 1);
  };

  const surpriseHandler = () => {
    let randomIndex = Math.floor(Math.random() * Reviews.length);
    setIndex(randomIndex);
  };

  return (
    <div className="testimonials-container">
      <TestimonialCard review={Reviews[index]} />

      <div className="controls">
        <button onClick={leftShiftHandler} className="nav-button">
          <FiChevronLeft />
        </button>
        <button onClick={rightShiftHandler} className="nav-button">
          <FiChevronRight />
        </button>
      </div>

      {/* <button onClick={surpriseHandler} className="surprise-button">
        Surprise Me
      </button> */}
    </div>
  );
};

export default Testimonial;
