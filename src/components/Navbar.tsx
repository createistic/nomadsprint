import * as React from "react";
import { Link } from "react-router-dom";
import logo from "../styles/nomadSprintNavbarLogo.png";
import "../styles/navbar.css";

const NavBar: React.FC = (): React.ReactElement => {
  return (
    <nav>
      <Link className="logo" to="/">
        <img src={logo} width={350} />
      </Link>
      <ul>
        <Link to="/">
          <li>Events</li>
        </Link>
        <Link to="/profile">
          <li>My Profile</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
