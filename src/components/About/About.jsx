import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

export const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leader Today</h2>
        <p>
          Embark on transerformative educational journey with our Universitty's
          comphrensive education programs our cutting-edge curriculam is
          designed to empower students with the knowledge, skills and
          experiences needed to exel in the dynamic field of education
        </p>
        <p>
          With focus on innovation ,hands On learning ,personalized mentorship
          ,our Programs preapare aspiring educators to make a meaningful
          classroom, school, communities
        </p>
        <p>
          With focus on innovation ,hands On learning ,personalized mentorship
          ,our Programs preapare aspiring educators to make a meaningful
          classroom, school, communities
        </p>
      </div>
    </div>
  );
};
