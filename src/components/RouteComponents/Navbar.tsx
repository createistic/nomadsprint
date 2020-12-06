import * as React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "./nomadSprintNavbarLogo.png";

const NavBar: React.FC = (): React.ReactElement => {
  return (
    <nav>
      <Link className="logo" to="/">
        <img src={logo} />
      </Link>
      <ul>
        <Link to="/business">
          <li>Business</li>
        </Link>
        <Link to="/mvp">
          <li>MVP</li>
        </Link>
        <Link to="/overview">
          <li>Overview</li>
        </Link>
        <Link to="/tech">
          <li>Tech</li>
        </Link>
        <Link to="/ux">
          <li>UX</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
