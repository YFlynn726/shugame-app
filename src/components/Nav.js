import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { Avatar } from "antd";

function Nav() {
  return (
    <nav className="nav-container">
      <Avatar src="../favicon.ico" alt="stick figure image" />

      <Link to="/">
        <h2 className="logo">Shu-game</h2>
      </Link>
      <ul className="nav-links">
        <Link to="/welcome">
          <li className="dash">Community Dashboard</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
