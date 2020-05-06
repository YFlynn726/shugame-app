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
      order_link: "",
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

  handleSubmit = (event) => {
    //const newShoe = this.state;
    //console.log(newShoe);
    this.addShoe();
    event.preventDefault();
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

  handleUserChange = (event) => {
    this.setState({ user_id: event.target.value });
  };

  render() {
    let options = this.context.users.map((user) => {
      return (
        <option key={user.id} value={user.id}>
          {user.first_name} {user.last_name}
        </option>
      );
    });
    return (
      <div className="App">
        <h2>Add a shoe!</h2>
        <form className="addShoeForm" onSubmit={this.handleSubmit}>
          <div>
            <label>
              Select user:
              <select onChange={this.handleUserChange}>{options}</select>
            </label>

            <br />
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
              value={this.state.order_link}
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
