import React, { Component } from "react";
import "./Landingpage.css";
import info from "./dummy-list";

console.log(info);

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      shoename: "",
    };
  }

  handlefnameChange = (event) => {
    this.setState({
      first_name: event.target.value,
    });
  };
  handlelnameChange = (event) => {
    this.setState({
      last_name: event.target.value,
    });
  };
  handlesnameChange = (event) => {
    this.setState({
      shoename: event.target.value,
    });
  };

  handleSubmit = (event) => {
    const newUser = this.state;
    newUser.id = info.users.length + 1;
    console.log(newUser);
    this.addUser(newUser);
    event.preventDefault();
  };

  addUser = (newUser) => {
    info.users.push(newUser);
    console.log(this.props);
    this.props.history.push("/welcome");
  };

  render() {
    return (
      <div>
        <div className="Landing">
          <h1>Welcome to the Shugame</h1>
          <h3>Improve Performance</h3>
          <br />
          <h3>Want to track your shoe usage?</h3>
          <p>
            Shugame will help track your shoe usage. Take control of your
            perfomance and track the mileage you put on your shoes. Is it time
            to get new shoes? Let us help you help your feet.{" "}
          </p>
          <br />
          <h3>Is it time to get new shoes?</h3>
          <p>
            Shugame can consistently track your shoes and remind you of those
            shoes you've been meaning to get but couldn't justify making the
            purchase. As you increase your usage and Shugame can update you on
            when it's time to get those new shoes.
          </p>
          <br />

          <h3>Can't remember those shoes you really liked?</h3>
          <p>
            Shugame game can store those wish shoes for you so you don't have to
            research all over again. As you progress through your running
            journey, Shugame will be here for you for when you are ready to
            purchase your new kicks.{" "}
          </p>
          <br />

          <h3>Start Tracking Now</h3>
          <form className="signup-form" onSubmit={this.handleSubmit}>
            <div>
              <label>First Name: </label>

              <input
                placeholder="John"
                type="text"
                value={this.state.first_name}
                onChange={this.handlefnameChange}
              />
            </div>

            <div>
              <label>Last Name: </label>

              <input
                type="text"
                placeholder="Doe"
                value={this.state.last_name}
                onChange={this.handlelnameChange}
              />
            </div>

            <div>
              <label>Shoe Name: </label>

              <input
                type="text"
                placeholder="Adidas Boost"
                value={this.state.shoename}
                onChange={this.handlesnameChange}
              />
            </div>
            <input type="submit" value="Submit" />
          </form>
          <br></br>
        </div>
      </div>
    );
  }
}

export default LandingPage;
