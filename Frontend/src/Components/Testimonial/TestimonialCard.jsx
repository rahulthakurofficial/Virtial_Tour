import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import './TestimonialCard.scss'; 

const TestimonialCard = ({ review }) => {
  return (
    <div className="testimonial-card">
      <div className="image-container">
        <img className="profile-image" src={review.image} alt={review.name} />
        <div className="background-circle"></div>
      </div>

      <div className="text-content">
        <p className="name">{review.name}</p>
        <p className="job">{review.job}</p>
      </div>

      <div className="quote-icon">
        <FaQuoteLeft />
      </div>

      <p className="review-text">{review.text}</p>

      <div className="quote-icon">
        <FaQuoteRight />
      </div>
    </div>
  );
};

export default TestimonialCard;
