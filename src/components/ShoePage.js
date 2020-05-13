import React, { Component } from "react";
import ShugameContext from "./ShugameContext";
//import INFO from "./dummy-list";
import "./shoedetail.css";
import { Link } from "react-router-dom";

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
    event.preventDefault();

    this.updateUsage();
  };

  updateUsage = () => {
    //console.log("i was here");
    this.context.updateUsage(this.state.usage, this.state.currentShoe);
  };

  deleteShoeRequest = (shoe) => {
    console.log(this.props);
    console.log(this.context);
    this.context.deleteShoe(this.props.match.params.id);
    this.props.history.push("/welcome");
  };

  render() {
    const userId = this.props.match.params.user_id;

    //console.log(this.props);
    //console.log(this.context.shoes);

    const filteredShoes = this.context.shoes.filter((shoe) => {
      //console.log(`${typeof folderId} vs ${typeof note.folder_id}`);
      // console.log(`${folderId} vs ${note.folder_id}`);
      //console.log(note);
      // eslint-disable-next-line eqeqeq
      return shoe.user_id == userId;
    });
    //console.log(filteredShoes);
    const shoes = filteredShoes.map((shoe, index) => {
      return (
        <div key={index}>
          <h4>Shoe List</h4>
          <li className="shoes">Shoe Name: {shoe.name}</li>
          <div>Shoe size: {shoe.shoe_size}</div>
          <div>Shoe usage: {shoe.usage} </div>
          <div>Order link: {shoe.order_link}</div>
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>Update Usage</label>
              <input
                key={shoe.id}
                type="number"
                name="usage"
                placeholder="120 miles"
                value={this.state.usage}
                onChange={(event) => this.handleUpdateUsageChange(event, shoe)}
                //onChange={this.handleUpdateUsageChange}
              />
              <input type="submit"></input>
            </form>
          </div>
          <br />

          <button className="delete_button" onClick={this.deleteShoeRequest}>
            Delete
          </button>
        </div>
      );
    });

    //console.log(this.context.shoes);

    const filteredWish = this.context.wishlist.filter((wishlist) => {
      //console.log(`${typeof folderId} vs ${typeof note.folder_id}`);
      // console.log(`${folderId} vs ${note.folder_id}`);
      //console.log(note);
      // eslint-disable-next-line eqeqeq
      return wishlist.user_id == userId;
    });
    //console.log(filteredWish);
    // console.log("Filtered notes");
    const wishlist = filteredWish.map((wishlist, index) => {
      return (
        <div key={index}>
          <h4>WishList</h4>
          <li className="wishlists">Shoe Name: {wishlist.shoe_name}</li>
          <div>Shoe size: {wishlist.shoe_size}</div>
          <div>Order link: {wishlist.order_link}</div>

          <br />

          <button>Delete</button>
        </div>
      );
    });
    return (
      <div className="content">
        <ul className="shoes">{shoes}</ul>
        <Link to={"/welcome"}>
          <input type="button" value="Go Back" />
        </Link>{" "}
        <Link to={"/AddShoe"}>
          <input type="button" value="Add A Shoe" />
        </Link>{" "}
        <h2>Wish List</h2>
        <ul>{wishlist}</ul>
        <Link to={"/AddWish"}>
          <input type="button" value="Add A Wish" />
        </Link>{" "}
      </div>
    );
  }
}

export default ShoeDetail;
