import React from "react";
import LoGo from "../../assets/react.svg";
import { FaShopify } from "react-icons/fa";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <FaShopify className='icon'/>
      <img className="header__logo" src={LoGo} alt="" />
      <h1>FakeShop</h1>  
      <h5 className="pages">Home</h5><h5 className="pages">  Sale</h5><h5 className="pages">New</h5>
    </header>
  );
};

export default Header;