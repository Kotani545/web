import React from "react";
import "./Search.css";
import { FaUserCircle } from "react-icons/fa";
import { SlMagnifier } from "react-icons/sl";

const Search = ({ value, onChangeData }) => {
  return (
    <div>
      <input
        className="search__input"
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChangeData}
      /> <SlMagnifier className='icon4' />
    </div>
  );
};

export default Search;