import React from "react";
import "./Button.css";
import { FaShoppingCart } from "react-icons/fa";

const Button = ({ num, click }) => {
  return (
    <div>
          <button className="ui-change-btn" onClick={() => click(true)}>
                <FaShoppingCart className='icon2' />
                <span>{num}</span> 
          </button>
    </div>
  );
};

export default Button;