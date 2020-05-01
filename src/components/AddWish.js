import React, { Component } from "react";

class AddWish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoe_name: "",
      shoe_size: "",
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

  handleOrderLinkChange = (event) => {
    this.setState({
      Order_link: event.target.value,
    });
  };

  handleSubmit = (event) => {
    const newWish = this.state;
    console.log(newWish);
    event.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <h1>Add a Wish!</h1>
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

export default AddWish;
