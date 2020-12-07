import * as React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import logo from "../styles/nomadSprintNavbarLogo.png";

const NavBar: React.FC = (): React.ReactElement => {
  return (
    <nav>
      <Link className="logo" to="/">
        <img src={logo} />
      </Link>
      <ul>
        <Link to="/">
          <li>Events</li>
        </Link>
        <Link to="/mvp">
          <li>My Profile</li>
        </Link>
        <Link to="/overview">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
