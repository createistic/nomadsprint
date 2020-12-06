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
