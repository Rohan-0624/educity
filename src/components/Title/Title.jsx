import React from "react";
import "./Title.css";

export const Title = ({ title, subTitle }) => {
  return (
    <div className="title">
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  );
};
