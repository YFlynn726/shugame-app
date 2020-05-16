import React, { Component } from "react";
import { Link } from "react-router-dom";
import config from "../config";
import ShugameContext from "./ShugameContext";
import "./userpage.css";

class Userpage extends Component {
  static contextType = ShugameContext;
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "",
    };
  }

  componentDidMount() {
    const userId = this.props.match.params.user_id;

    fetch(`${config.API_ENDPOINT}api/users/${userId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //console.log("Request success: ", data);
        this.setState({
          currentUser: data,
        });
      })
      .catch((error) => {
        console.log("Request failure: ", error);
      });
  }

  render() {
    const userId = this.props.match.params.user_id;
    // const wishlistId = this.props.match.params.wishlist_id;
    // console.log(wishlistId);
    // fetch(`${config.API_ENDPOINT}api/users/${userId}`, {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     //console.log("Request success: ", data);
    //     this.setState({
    //       currentUser: data,
    //     });
    //   })
    //   .catch((error) => {
    //     console.log("Request failure: ", error);
    //   });

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
    //console.log(filteredWish);
    const wishlist = filteredWish.map((wishlist) => {
      return (
        <div key={wishlist.id}>
          <li className="wishlist">Shoe Name: {wishlist.name}</li>
          <li>
            <a
              href={wishlist.order_link}
              rel="noopener noreferrer"
              target="_blank"
            >
              Order Shoe Here
            </a>
          </li>
          {/*  */}
          <br />
        </div>
      );
    });
    return (
      <div className="userinfo">
        {this.state.currentUser && (
          <h2 className="usertitle">
            {this.state.currentUser.first_name}{" "}
            {this.state.currentUser.last_name}
            &nbsp;Shoe List
          </h2>
        )}
        <p className="userdir">Select a shoe to see details</p>
        <ul className="shoelist">{shoes}</ul>
        <Link to={"/AddShoe"}>
          <input type="button" value="Add Shoe" />
        </Link>
        <br />
        <br />
        <br />
        <h2>Your Wish List</h2>
        <ul className="wishes">{wishlist}</ul>
        <div className="wishbutton">
          <Link to={"/AddWish"}>
            <input type="button" value="Add A Wish" />
          </Link>{" "}
        </div>
      </div>
    );
  }
}

export default Userpage;
