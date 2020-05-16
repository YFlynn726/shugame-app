import React, { Component } from "react";
import ShugameContext from "./ShugameContext";
import "./shoedetail.css";
import { Link } from "react-router-dom";
import { Progress } from "antd";
//import "./App.css";

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
    this.updateUsage();
    event.preventDefault();
  };

  updateUsage = () => {
    this.context.updateUsage(this.state.usage, this.state.currentShoe);
    this.setState({
      usage: "",
    });
  };

  deleteShoeRequest = (shoe) => {
    this.context.deleteShoe(this.props.match.params.shoe_id);
    this.props.history.push("/welcome");
  };

  render() {
    const shoeId = this.props.match.params.shoe_id;

    const shoedetails = this.context.shoes
      .filter((shoe) => {
        // eslint-disable-next-line eqeqeq
        return shoe.id == shoeId;
      })
      .map((shoe) => {
        return (
          <div className="shoeinfo" key={shoe.id}>
            <li className="shoeinfo">Shoe Name: {shoe.name}</li>
            <li className="shoeinfo">Shoe size: {shoe.shoe_size}</li>
            <li className="shoeinfo">Shoe usage: {shoe.usage} </li>
            <div>
              <Progress type="circle" percent={(shoe.usage * 100) / 400} />
            </div>

            <li className="shoeinfo">
              {" "}
              <a
                href={shoe.order_link}
                rel="noopener noreferrer"
                target="_blank"
              >
                Order Shoe Here
              </a>
            </li>
            <br />
            <div>
              <form className="addshoeform" onSubmit={this.handleSubmit}>
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

    return (
      <div className="shoedeets">
        <h2 className="shoetitle">Your shoe deets!</h2>
        <ul className="shoespecs">{shoedetails}</ul>
        <Link to={"/welcome"}>
          <input type="button" value="Go Back" />
        </Link>{" "}
        <Link to={"/AddShoe"}>
          <input type="button" value="Add A Shoe" />
        </Link>{" "}
      </div>
    );
  }
}

export default ShoeDetail;
