import React, { Component } from "react";
import ShugameContext from "./ShugameContext";
import ValidationError from "./ValidateError";
import "./addwish.css";

class AddWish extends Component {
  static contextType = ShugameContext;

  constructor(props) {
    super(props);
    this.state = {
      shoe_name: "",
      order_link: "",
      error: false,
    };
  }

  handlesnameChange = (event) => {
    this.setState({
      shoe_name: event.target.value,
    });
  };

  handleOrderLinkChange = (event) => {
    this.setState({
      order_link: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validateName();
    if (!isValid.error) {
      this.addWish();
    } else {
      this.updateError(isValid.value);
    }
  };

  addWish = () => {
    this.context.addWish(
      this.state.shoe_name,
      this.state.order_link,
      this.state.user_id
    );
    this.props.history.push("/welcome");
  };

  handleUserChange = (event) => {
    this.setState({ user_id: event.target.value });
  };

  updateError = (err) => {
    this.setState({
      error: err,
    });
  };

  validateName = () => {
    const name = this.state.shoe_name.trim();
    const result = { error: false, value: name };
    if (name.length <= 2) {
      result.error = true;
      result.value = " Name must be at least 3 characters long";
    }
    return result;
  };

  render() {
    const { error } = this.state;
    const validationError = error ? <ValidationError message={error} /> : "";
    let options = this.context.users.map((user) => {
      return (
        <option key={user.id} value={user.id}>
          {user.first_name} {user.last_name}
        </option>
      );
    });

    return (
      <div className="wishinfo">
        <h2>Add a Wish!</h2>
        <p>Please select your name to add wish to your list</p>

        <form className="addWishForm" onSubmit={this.handleSubmit}>
          <div>
            <label>
              Select Your Name:
              <select onChange={this.handleUserChange}>{options}</select>
            </label>
          </div>
          <div>
            <label>Shoe Name:</label>
            <input
              type="text"
              id="shoename"
              name="shoename"
              value={this.state.shoe_name}
              onChange={this.handlesnameChange}
              placeholder="adidas Ultraboost"
              required
            />
            {validationError}
          </div>

          <div>
            <label>Order Link:</label>
            <input
              type="text"
              id="orderlink"
              name="orderlink"
              value={this.state.order_link}
              onChange={this.handleOrderLinkChange}
              placeholder="https://www.adidas.com"
              required
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddWish;
