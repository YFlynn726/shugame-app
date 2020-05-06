import React, { Component } from "react";
//import INFO from "./dummy-list";
import { Link } from "react-router-dom";
import "./Mainpage.css";
import ShugameContext from "../components/ShugameContext";

class Mainpage extends Component {
  static contextType = ShugameContext;

  state = {};

  render() {
    //console.log(INFO);
    const userlist = this.context.users.map((user) => {
      return (
        <Link key={user.id} to={`/users/${user.id}`}>
          <li className="users">
            {user.first_name} {user.last_name}
          </li>
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
