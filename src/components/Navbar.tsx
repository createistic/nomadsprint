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
