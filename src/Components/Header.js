import React from "react";
import LOGO from "./../Assets/Images/LOGO.png";
import { Link } from "react-router-dom";

const LogoLink = () => (
  <a href="/">
    <img src={LOGO} alt="LOGO" className="logo" />
  </a>
);
const Header = () => {
  return (
    <div className="header">
      <LogoLink />
      <ul className="apps">
        <li>
          <Link to="/book-hotel">Hotels</Link>
        </li>
        <li>
          <Link to="/book-flight">Flights</Link>
        </li>
        <li>
          <Link to="/book-homestay">Home Stay</Link>
        </li>
        <li>
          <Link to="/book-activity">Activities</Link>
        </li>
      </ul>
      <ul className="helper-menu">
        <li>Help</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Header;
