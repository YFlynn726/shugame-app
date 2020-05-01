// import React from "react";

// function ShoeDetail() {
//   return (
//     <div className="App">
//       <h1>Hello shoe detail!</h1>
//     </div>
//   );
// }

// export default ShoeDetail;

import React, { Component } from "react";
import INFO from "./dummy-list";
import "./shoedetail.css";
import { Link } from "react-router-dom";
//import NotefulContext from "./NotefulContext";

// the id of the folder you're currently viewing
// can get accessed from the route params
// this.props.match.params
// filter through the notes using the folder id

class ShoeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateUsage: "",
    };
  }

  handleUpdateUsageChange = (event) => {
    this.setState({
      updateUsage: event.target.value,
    });
  };

  handleSumbit = (event) => {
    const newUsage = this.state;
    console.log(newUsage);
    event.preventDefault();
  };

  render() {
    //console.log(this.context.notes);
    // console.log("Notes");
    const userId = this.props.match.params.user_id;
    // loop through notes from store and filter for the notes
    // that have a folder matching this folder id
    //const folderId = this.context;
    // console.log("Folder ID");
    //console.log(userId);
    const filteredShoes = INFO.shoes
      .filter((shoe) => {
        //console.log(`${typeof folderId} vs ${typeof note.folder_id}`);
        // console.log(`${folderId} vs ${note.folder_id}`);
        //console.log(note);
        // eslint-disable-next-line eqeqeq
        return shoe.user_Id == userId;
      })
      // console.log("Filtered notes");
      .map((shoe, index) => {
        return (
          <div key={index}>
            <h4>Shoe List</h4>
            <li className="shoes">{shoe.shoe_name}</li>
            <div>Shoe size: {shoe.shoe_size}</div>
            <div>Shoe usage: {shoe.usage} </div>
            <div>
              <form onSubmit={this.handleSumbit}>
                <label>Update Usage</label>
                <input
                  type="number"
                  name="usage"
                  placeholder="120 miles"
                  value={this.state.updateUsage}
                  onChange={this.handleUpdateUsageChange}
                />
                <input type="submit"></input>
              </form>
            </div>
            <br />
            Order link: {shoe.Order_link}
            <br />
            <button>Delete</button>
          </div>
        );
      });
    return (
      <div className="content">
        <ul className="shoes">{filteredShoes}</ul>
        <Link to={"/"}>
          <input type="button" value="Go Back" />
        </Link>{" "}
        <Link to={"/AddShoe"}>
          <input type="button" value="Add A Shoe" />
        </Link>{" "}
        <h2>Wish List</h2>
        <ul>
          <li className="shoes">
            Adidas Boost 20 new color <button>Delete</button>
          </li>
          <li className="shoes">
            Nike <button>Delete</button>
          </li>
          <li className="shoes">
            Asics <button>Delete</button>
          </li>
        </ul>
        <Link to={"/AddWish"}>
          <input type="button" value="Add A Wish" />
        </Link>{" "}
      </div>
    );
  }
}

export default ShoeDetail;
