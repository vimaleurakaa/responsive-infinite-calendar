import React from "react";
import { useSelector } from "react-redux";
import "./header.scss";

const Header = () => {
  const date = useSelector((state) => state.app.month);
  const month = date?.split(" ").at(1);
  const year = date?.split(" ").at(3);

  return (
    <header>
      <ul className="header__navigation">
        <li>
          <span className="header__active">my</span> hair dairy
        </li>
        <li className="header__date">
          <span className="header__month">{month}</span>{" "}
          <span className="header__year">{year}</span>
        </li>
      </ul>
    </header>
  );
};
export default Header;
