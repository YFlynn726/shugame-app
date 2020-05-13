import React, { Component } from "react";
import ShugameContext from "./ShugameContext";

class AddWish extends Component {
  static contextType = ShugameContext;

  constructor(props) {
    super(props);
    this.state = {
      shoe_name: "",
      //shoe_size: "",
      order_link: "",
    };
  }

  handlesnameChange = (event) => {
    this.setState({
      shoe_name: event.target.value,
    });
  };

  // handlesSizeChange = (event) => {
  //   this.setState({
  //     shoe_size: event.target.value,
  //   });
  // };

  handleOrderLinkChange = (event) => {
    this.setState({
      order_link: event.target.value,
    });
  };

  handleSubmit = (event) => {
    console.log("i was here");
    //const newWish = this.state;
    //console.log(newWish);
    //console.log(this.state);
    this.addWish();
    event.preventDefault();
  };

  addWish = () => {
    this.context.addWish(
      this.state.shoe_name,
      //this.state.shoe_size,
      this.state.order_link,
      this.state.user_id
    );
    this.props.history.push("/welcome");
  };

  handleUserChange = (event) => {
    console.log(event.target.value);
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
        <h1>Add a Wish!</h1>
        <form className="addShoeForm" onSubmit={this.handleSubmit}>
          <div>
            <label>
              Select user:
              <select onChange={this.handleUserChange}>{options}</select>
            </label>
            <label>Shoe Name:</label>
            <input
              type="text"
              id="shoename"
              name="shoename"
              value={this.state.shoe_name}
              onChange={this.handlesnameChange}
            />
          </div>
          {/* <div>
            <label>Shoe Size:</label>
            <input
              type="text"
              id="shoesize"
              name="shoesize"
              value={this.state.shoe_size}
              onChange={this.handlesSizeChange}
            />
          </div> */}
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

export default AddWish;
