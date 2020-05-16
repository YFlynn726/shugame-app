import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">
        <h1 className="logo">Shu-game</h1>
      </Link>
      <ul className="nav-links">
        <Link to="/welcome">
          <li>Community Dashboard</li>
        </Link>
        {/* <Link to="/AddShoe">
          <li>Add a Shoe</li>
        </Link> */}
      </ul>
    </nav>
  );
}

export default Nav;
