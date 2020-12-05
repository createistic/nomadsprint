import * as React from "react";
import "../styles/navbar.css";

const NavBar: React.FC = (): React.ReactElement => {
  return (
    <div>
      <nav>
        <li>Logo</li>
        <li>Bussiness</li>
        <li>overview</li>
      </nav>
    </div>
  );
};

export default NavBar;
