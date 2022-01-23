import React from "react";
import "./index.scss";
import { AiOutlineHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { RiAddCircleLine } from "react-icons/ri";
import { BsCalendar2Week } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const BottomNavigation = () => {
  return (
    <div className="bottom__nav">
      <ul>
        <li>
          <AiOutlineHome />
        </li>
        <li>
          <FiSearch />
        </li>
        <li>
          <RiAddCircleLine />
        </li>
        <li>
          <BsCalendar2Week />
        </li>
        <li>
          <CgProfile />
        </li>
        <div className="bar"></div>
      </ul>
    </div>
  );
};

export default BottomNavigation;
