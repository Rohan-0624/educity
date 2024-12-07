import React, { useState } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

export const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4; // Number of slides

  // Function to go to the next slide
  const slideForward = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1); // Move to the next slide
    }
  };

  // Function to go to the previous slide
  const slideBackward = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1); // Move to the previous slide
    }
  };

  return (
    <div className="testimonials">
      <img
        src={back_icon}
        alt="Back"
        className="back-btn"
        onClick={slideBackward} // When clicked, go to previous slide
      />
      <img
        src={next_icon}
        alt="Next"
        className="next-btn"
        onClick={slideForward} // When clicked, go to next slide
      />
      <div className="slider">
        <ul
          style={{
            transform: `translateX(-${currentSlide * 25}%)`, // Moves the slider one step per click
            transition: "transform 0.8s ease", // Smooth transition between slides
          }}
        >
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="William Jackson" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Educity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue a degree at Educity was one of the best
                decisions I've made. The supportive community, state-of-the-art
                facilities, and commitment to academic excellence have truly
                exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="Mia Milano" />
                <div>
                  <h3>Mia Milano</h3>
                  <span>Educity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue a degree at Educity was one of the best
                decisions I've made. The supportive community, state-of-the-art
                facilities, and commitment to academic excellence have truly
                exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="Danial Smith" />
                <div>
                  <h3>Danial Smith</h3>
                  <span>Educity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue a degree at Educity was one of the best
                decisions I've made. The supportive community, state-of-the-art
                facilities, and commitment to academic excellence have truly
                exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="Sunny Leone" />
                <div>
                  <h3>Sunny Leone</h3>
                  <span>Educity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue a degree at Educity was one of the best
                decisions I've made. The supportive community, state-of-the-art
                facilities, and commitment to academic excellence have truly
                exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
