import React, { Component } from "react";
//import STORE from "./dummy-store.js";
import { Link } from "react-router-dom";
import ShugameContext from "./ShugameContext";
import "./userpage.css";

// the id of the folder you're currently viewing
// can get accessed from the route params
// this.props.match.params
// filter through the notes using the folder id

class Userpage extends Component {
  static contextType = ShugameContext;

  //   deleteWishRequest = (wishlistId) => {
  //     console.log(this.props);
  //     console.log(this.context);
  //     console.log(this.props.match.params);
  //     this.context.deleteWish(this.props.match.params.wishlist_id);
  //     this.props.history.push("/welcome");
  //   };

  render() {
    const userId = this.props.match.params.user_id;
    const wishlistId = this.props.match.params.wishlist_id;
    console.log(wishlistId);
    console.log(userId);

    //console.log(userId);
    const filteredShoes = this.context.shoes.filter((shoe) => {
      // eslint-disable-next-line eqeqeq
      return shoe.user_id == userId;
    });
    //console.log(filteredShoes);
    const shoes = filteredShoes.map((shoe) => {
      return (
        <Link key={shoe.id} to={`/shoes/${shoe.id}`}>
          <li className="shoes">{shoe.name}</li>
        </Link>
      );
    });
    //console.log(shoes);

    const filteredWish = this.context.wishlist.filter((wishlist) => {
      console.log(this.context.wishlist);
      // eslint-disable-next-line eqeqeq
      return wishlist.user_id == userId;
    });
    console.log(filteredWish);
    const wishlist = filteredWish.map((wishlist) => {
      return (
        <div key={wishlist.id}>
          <li className="shoes">Shoe Name: {wishlist.name}</li>
          <div>Order link: {wishlist.order_link}</div>
          {/* <a href={wishlist.order_link}>Order Shoe Here</a> */}
          <br />
        </div>
      );
    });
    return (
      <div>
        <h2>Shoe List</h2>
        <ul className="shoes">{shoes}</ul>
        <Link to={"/AddShoe"}>
          <input type="button" value="Add Shoe" />
        </Link>
        <br />
        <br />
        <br /> <br />
        <br />
        <br />
        <h2>Wish List</h2>
        <ul className="shoes">{wishlist}</ul>
        <div>
          <Link to={"/AddWish"}>
            <input type="button" value="Add A Wish" />
          </Link>{" "}
        </div>
      </div>
    );
  }
}

export default Userpage;
