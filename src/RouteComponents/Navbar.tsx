import * as React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const NavBar: React.FC = (): React.ReactElement => {
  return (
    <nav>
      <h1>
        <Link className="logo" to="/">
          Logo
        </Link>
      </h1>
      <ul>
        <Link to="/Business">
          <li>Business</li>
        </Link>
        <Link to="/MVP">
          <li>MVP</li>
        </Link>
        <Link to="/Overview">
          <li>Overview</li>
        </Link>
        <Link to="/Tech">
          <li>Tech</li>
        </Link>
        <Link to="/UX">
          <li>UX</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
