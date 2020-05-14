import React, { Component } from "react";
import { Link } from "react-router-dom";
import ShugameContext from "./ShugameContext";
import "./userpage.css";

class Userpage extends Component {
  static contextType = ShugameContext;

  render() {
    const userId = this.props.match.params.user_id;
    // const wishlistId = this.props.match.params.wishlist_id;
    // console.log(wishlistId);

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

    const filteredWish = this.context.wishlist.filter((wishlist) => {
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
