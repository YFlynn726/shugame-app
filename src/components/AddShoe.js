import React, { Component } from "react";
import ShugameContext from "./ShugameContext";

class AddShoe extends Component {
  static contextType = ShugameContext;

  constructor(props) {
    super(props);
    this.state = {
      shoe_name: "",
      shoe_size: "",
      usage: "",
      Order_link: "",
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
      Order_link: event.target.value,
    });
  };

  handleSubmit = (event) => {
    const newShoe = this.state;
    console.log(newShoe);
    event.preventDefault();
  };

  addShoe = (newShoe) => {
    this.context.addShoe(newShoe);
    this.props.history.push("/welcome");
  };

  render() {
    return (
      <div className="App">
        <h2>Add a shoe!</h2>
        <form className="addShoeForm" onSubmit={this.handleSubmit}>
          <div>
            <label>Shoe Name:</label>
            <input
              type="text"
              id="shoename"
              name="shoename"
              value={this.state.shoe_name}
              onChange={this.handlesnameChange}
            />
          </div>
          <div>
            <label>Shoe Size:</label>
            <input
              type="text"
              id="shoesize"
              name="shoesize"
              value={this.state.shoe_size}
              onChange={this.handlesSizeChange}
            />
          </div>
          <div>
            <label>Shoe Miles:</label>
            <input
              type="text"
              id="shoemiles"
              name="shoemiles"
              value={this.state.usage}
              onChange={this.handleUsageChange}
            />
          </div>
          <div>
            <label>Order Link:</label>
            <input
              type="text"
              id="orderlink"
              name="orderlink"
              value={this.state.Order_link}
              onChange={this.handleOrderLinkChange}
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default AddShoe;
