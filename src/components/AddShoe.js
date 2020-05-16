import React, { Component } from "react";
import ShugameContext from "./ShugameContext";
import ValidateError from "./ValidateError";
import "./addshoe.css";

class AddShoe extends Component {
  static contextType = ShugameContext;

  constructor(props) {
    super(props);
    this.state = {
      shoe_name: "",
      shoe_size: "",
      usage: "",
      order_link: "",
      user_id: "",
      error: false,
    };
  }

  handlesnameChange = (event) => {
    this.setState({
      shoe_name: event.target.value,
    });
  };

  handlesSizeChange = (event) => {
    this.setState({
      shoe_size: event.target.value,
    });
  };
  handleUsageChange = (event) => {
    this.setState({
      usage: event.target.value,
    });
  };
  handleOrderLinkChange = (event) => {
    this.setState({
      order_link: event.target.value,
    });
  };

  handleUserChange = (event) => {
    this.setState({ user_id: event.target.value });
    console.log(this.state.user_id);
    console.log(this.context.users);
    console.log(event.target.value);
  };

  handleSubmit = (event) => {
    //const newShoe = this.state;
    //console.log(newShoe);
    event.preventDefault();
    const isValid = this.validateName();
    if (!isValid.error) {
      this.addShoe();
    } else {
      this.updateError(isValid.value);
    }
  };

  addShoe = () => {
    this.context.addShoe(
      this.state.shoe_name,
      this.state.shoe_size,
      this.state.usage,
      this.state.order_link,
      this.state.user_id
    );
    this.props.history.push("/welcome");
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
      result.value = "Name must be at least 3 characters long";
    }
    return result;
  };

  render() {
    const { error } = this.state;
    const validationError = error ? <ValidateError message={error} /> : "";
    let options = this.context.users.map((user) => {
      return (
        <option key={user.id} value={user.id}>
          {user.first_name} {user.last_name}
        </option>
      );
    });

    return (
      <div className="addshoeform">
        <h2>Add your shoe</h2>
        <p>Please select your name to add shoe to your list</p>
        <form className="addShoeForm" onSubmit={this.handleSubmit}>
          <label>
            Select Your Name:
            <select onChange={this.handleUserChange}>{options}</select>
          </label>

          <br />
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
            <label>Shoe Size:</label>
            <input
              type="text"
              id="shoesize"
              name="shoesize"
              value={this.state.shoe_size}
              onChange={this.handlesSizeChange}
              placeholder="7"
              required
            />
          </div>
          <div>
            <label>Shoe Miles:</label>
            <input
              type="number"
              id="shoemiles"
              name="shoemiles"
              value={this.state.usage}
              onChange={this.handleUsageChange}
              placeholder="45"
              required
            />
          </div>
          <div>
            <label>Order Link:</label>
            <input
              type="url"
              pattern="https://.*"
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
        <p>
          *A good rule of thumb is to replace your running shoes every 300–400
          miles.
        </p>
      </div>
    );
  }
}
export default AddShoe;
