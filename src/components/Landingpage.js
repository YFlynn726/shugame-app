import React, { Component } from "react";
import "./Landingpage.css";
import ShugameContext from "./ShugameContext";
import ValidationError from "./ValidateError";

class LandingPage extends Component {
  static contextType = ShugameContext;

  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      error: false,
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

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validateName();
    if (!isValid.error) {
      this.addUser();
    } else {
      this.updateError(isValid.value);
    }
  };

  addUser = () => {
    //update context
    this.context.addUser(this.state.first_name, this.state.last_name);
    this.props.history.push("/welcome");
  };

  updateError = (err) => {
    this.setState({
      error: err,
    });
  };

  validateName = () => {
    const firstName = this.state.first_name.trim();
    const lastName = this.state.last_name.trim();
    const result = { error: false, value: firstName, lastName };
    if (firstName.length <= 2 || lastName.length <= 2) {
      result.error = true;
      result.value =
        "First Name and Last Name must be at least 3 characters long";
    }
    return result;
  };

  render() {
    const { error } = this.state;
    const validationError = error ? <ValidationError message={error} /> : "";
    return (
      <div>
        <div className="Landing">
          <h2 className="landing-title">Welcome to the Shu-Game</h2>
          <h3>Improve Your Performance</h3>
          <br />
          <h3>Want to track your shoe usage?</h3>
          <p>
            Shu-game will help track your shoe usage. Take control of your
            perfomance and track the mileage you put on your shoes. Let us help
            you help your feet.{" "}
          </p>
          <br />
          <h3>Is it time to get new shoes?</h3>
          <p>
            Shu-game can consistently track your shoes and remind you of those
            shoes you've been meaning to get but couldn't justify making the
            purchase. As you increase your usage and Shu-game can update you on
            when it's time to get those new shoes.
          </p>
          <br />

          <h3>Can't remember those shoes you really liked?</h3>
          <p>
            Shu-game game can store those wish shoes for you so you don't have
            to research all over again. As you progress through your running
            journey, Shu-game will be here for you for when you are ready to
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
                required
              />
              {validationError}
            </div>

            <div>
              <label>Last Name: </label>

              <input
                type="text"
                placeholder="Doe"
                value={this.state.last_name}
                onChange={this.handlelnameChange}
                required
              />
              {validationError}
            </div>

            <input className="button" type="submit" value="Submit" />
          </form>
          <br></br>
        </div>
      </div>
    );
  }
}

export default LandingPage;
