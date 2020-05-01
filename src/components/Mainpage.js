import React, { Component } from "react";
import INFO from "./dummy-list";
import { Link } from "react-router-dom";
import "./Mainpage.css";

class Mainpage extends Component {
  state = {};

  render() {
    console.log(INFO);
    const userlist = INFO.users.map((user) => {
      return (
        <Link key={user.id} to={`/users/${user.id}`}>
          <li className="users">{user.name}</li>
        </Link>
      );
    });

    return (
      <div>
        <h3>Welcome</h3>
        <ul className="users">{userlist}</ul>
      </div>
    );
  }
}

export default Mainpage;
