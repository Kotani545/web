import React from "react";
import "./ButtonL.css";
import { FaUserCircle } from "react-icons/fa";

const ButtonL = ({ click }) => {
  return (
    <div>
        <button className="ui-btn" onClick={() => click(true)}>
            <FaUserCircle />
        </button>
    </div>
  );
};

export default ButtonL;