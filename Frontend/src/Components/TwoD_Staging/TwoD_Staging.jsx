
import React from "react";
import "./TwoD_Staging.scss";
import { FaShoppingCart } from "react-icons/fa";

const imageData = [
  { before: "/flat1.webp", after: "/flat5.jpg", price: "10k" },
  { before: "/flat21.jpg", after: "/flat6.jpg", price: "20k" },
  { before: "/flat31.jpg", after: "/flat7.jpg", price: "30k" },
  { before: "/flat41.jpg", after: "/flat8.jpg", price: "40k" },
];

const ImageHoverEffect = ({ before, after, price }) => {
  return (
    <div className="comparison-box">
      <div className="image-container">
        <img src={before} alt="Before" className="before-img" />
        <img src={after} alt="After" className="after-img" />
        {/* <span className="label label-before">Before</span>
        <span className="label label-after">After</span> */}
      </div>

      <div className="price-container">
        <div className="price-tag">₹ {price}</div>
        <button className="buy-now-btn">
          <FaShoppingCart className="cart-icon" /> BUY NOW
        </button>
      </div>
    </div>
  );
};

const TwoD_Staging = () => {
  return (
    <div className="outer-box">
      <h2 className="staging-heading">2D Photo Staging Services</h2>
      <div className="grid-container">
        {imageData.map((item, index) => (
          <ImageHoverEffect key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TwoD_Staging;
