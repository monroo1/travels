import React from "react";
import { Link } from "react-router-dom";
import "./BluBtn.scss";

const BlueBtn = ({ props, link }) => {
  return (
    <div className="blue-btn">
      <Link to={!!link ? link : "/"}>{props}</Link>
    </div>
  );
};

export default BlueBtn;
