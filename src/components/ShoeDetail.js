import React, { Component } from "react";
import ShugameContext from "./ShugameContext";
//import INFO from "./dummy-list";
import "./shoedetail.css";
//import { Link } from "react-router-dom";

class ShoeDetail extends Component {
  static contextType = ShugameContext;

  constructor(props) {
    super(props);
    this.state = {
      currentShoes: {},
      usage: "",
      currentShoe: "",
    };
  }

  handleUpdateUsageChange = (event, shoe) => {
    this.setState({
      usage: event.target.value,
      currentShoe: shoe,
    });
    event.preventDefault();
  };

  handleSubmit = (event) => {
    console.log(this.state.currentShoe);
    console.log(this.state.usage);
    this.updateUsage();
    event.preventDefault();
  };

  updateUsage = () => {
    //console.log("i was here");
    this.context.updateUsage(this.state.usage, this.state.currentShoe);
  };

  deleteShoeRequest = (shoe) => {
    console.log(this.props);
    console.log(this.context);
    this.context.deleteShoe(this.props.match.params.shoe_id);
    this.props.history.push("/welcome");
  };

  render() {
    //console.log("i got here 1");
    const shoeId = this.props.match.params.shoe_id;
    //console.log("i got here 2");

    //console.log(this.props);
    //console.log(this.context.shoes);

    const shoedetails = this.context.shoes
      .filter((shoe) => {
        // eslint-disable-next-line eqeqeq
        return shoe.id == shoeId;
      })
      .map((shoe) => {
        return (
          <div key={shoe.id}>
            <li className="shoes">Shoe Name: {shoe.name}</li>
            <div>Shoe size: {shoe.shoe_size}</div>
            <div>Shoe usage: {shoe.usage} </div>
            <div>Order link: {shoe.order_link}</div>
            <br />
            <div>
              <form onSubmit={this.handleSubmit}>
                <label>Update Usage</label>
                <input
                  key={shoe.id}
                  type="number"
                  name="usage"
                  placeholder="120 miles"
                  value={this.state.usage}
                  onChange={(event) =>
                    this.handleUpdateUsageChange(event, shoe)
                  }
                  //onChange={this.handleUpdateUsageChange}
                />
                <input type="submit"></input>
              </form>
            </div>

            <button className="delete_button" onClick={this.deleteShoeRequest}>
              Delete
            </button>
          </div>
        );
      });

    console.log(this.context.shoes);
    return (
      <div className="content">
        <ul className="shoes">{shoedetails}</ul>
        {/* <Link to={"/welcome"}>
          <input type="button" value="Go Back" />
        </Link>{" "}
        <Link to={"/AddShoe"}>
          <input type="button" value="Add A Shoe" />
        </Link>{" "} */}
      </div>
    );
  }
}

export default ShoeDetail;
