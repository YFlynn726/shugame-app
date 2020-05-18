import React, { Component } from "react";
import Nav from "./components/Nav";
import AddShoe from "./components/AddShoe";
import LandingPage from "./components/Landingpage";
import Mainpage from "./components/Mainpage";
import ShoeDetail from "./components/ShoeDetail";
import Userpage from "./components/UserPage";
import "./App.css";
import config from "./config";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddWish from "./components/AddWish";
import ShugameContext from "./components/ShugameContext";
import BoundaryError from "./components/BoundaryError";
import Wishlist from "./components/Wishlist";

class App extends Component {
  state = {
    shoes: [],
    users: [],
    wishlist: [],
    addUser: this.addUser,
    addShoe: this.addShoe,
    addWish: this.addWish,
    deleteShoe: this.deleteShoe,
    deleteWish: this.deleteWish,

    updateUsage: this.updateUsage,
  };

  updateUsage = (usage, shoe) => {
    const newUsage = {
      usage: parseInt(usage) + parseInt(shoe.usage),
    };

    fetch(`${config.API_ENDPOINT}api/shoes/${shoe.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUsage),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const shoes = this.state.shoes.map((item) => {
          if (item.id === shoe.id) {
            return {
              ...item,
              usage: newUsage.usage,
            };
          } else {
            return item;
          }
        });
        this.setState({
          shoes,
        });
      })
      .catch((error) => {
        console.log("Request failure: ", error);
      });
  };

  deleteShoe = (shoeId) => {
    const newShoes = this.state.shoes.filter((shoe) => {
      return shoe.id !== shoeId;
    });
    console.log(newShoes);
    fetch(`${config.API_ENDPOINT}api/shoes/${shoeId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(this.state);
      })
      .catch((error) => {
        console.log("Request failure: ", error);
      });
    this.setState({
      shoes: this.state.shoes.filter((shoe) => +shoe.id !== +shoeId),
    });
  };

  deleteWish = (wishlistId) => {
    const newWishlist = this.state.wishlist.filter((wishlist) => {
      return wishlist.id !== wishlistId;
    });
    console.log(newWishlist);
    fetch(`${config.API_ENDPOINT}api/wishlist/${wishlistId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(this.state);
      })
      .catch((error) => {
        console.log("Request failure: ", error);
      });
    this.setState({
      wishlist: this.state.wishlist.filter(
        (wishlist) => +wishlist.id !== +wishlistId
      ),
    });
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}api/shoes`),
      fetch(`${config.API_ENDPOINT}api/users`),
      fetch(`${config.API_ENDPOINT}api/wishlist`),
    ])
      .then(([shoesRes, usersRes, wishlistRes]) => {
        if (!shoesRes.ok) return shoesRes.json().then((e) => Promise.reject(e));
        if (!usersRes.ok) return usersRes.json().then((e) => Promise.reject(e));
        if (!wishlistRes.ok)
          return wishlistRes.json().then((e) => Promise.reject(e));

        return Promise.all([
          shoesRes.json(),
          usersRes.json(),
          wishlistRes.json(),
        ]);
      })
      .then(([shoes, users, wishlist]) => {
        this.setState({ shoes, users, wishlist });
      })
      .catch((error) => {
        console.error({ error });
      });
  }

  addUser = (first_name, last_name) => {
    const newUser = {
      first_name: first_name,
      last_name: last_name,
    };

    fetch(`${config.API_ENDPOINT}api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("Request success: ", data);
        this.setState({
          id: Response.id,
          users: [...this.state.users, data],
        });
      })
      .catch((error) => {
        console.log("Request failure: ", error);
      });
  };

  addShoe = (shoe, shoe_size, usage, order_link, user_id) => {
    const newShoe = {
      name: shoe,
      shoe_size: shoe_size,
      usage: usage,
      order_link: order_link,
      user_id,
    };
    console.log(newShoe);

    fetch(`${config.API_ENDPOINT}api/shoes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newShoe),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("Request success: ", data);

        this.setState({
          shoes: [...this.state.shoes, data],
          id: Response.id,
          user_id: Response.user_id,
        });
      })
      .catch((error) => {
        console.log("Request failure: ", error);
      });
  };

  addWish = (shoe_name, order_link, user_id) => {
    console.log(shoe_name, order_link, user_id);
    const newWishlistItem = {
      name: shoe_name,
      order_link: order_link,
      user_id,
    };

    fetch(`${config.API_ENDPOINT}api/wishlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newWishlistItem),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("Request success: ", data);

        this.setState({
          wishlist: [...this.state.wishlist, data],
          id: Response.id,
          user_id: Response.user_id,
        });
      })
      .catch((error) => {
        console.log("Request failure: ", error);
      });
  };

  render() {
    const contextValue = {
      shoes: this.state.shoes,
      users: this.state.users,
      wishlist: this.state.wishlist,
      addShoe: this.addShoe,
      deleteShoe: this.deleteShoe,
      deleteWish: this.deleteWish,
      addUser: this.addUser,
      addWish: this.addWish,
      updateUsage: this.updateUsage,
    };
    return (
      <Router>
        <div className="App">
          <BoundaryError>
            <ShugameContext.Provider value={contextValue}>
              <Nav />

              <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/welcome" component={Mainpage} />
                <Route path="/users/:user_id" component={Userpage} />
                <Route path="/wishlist/:wishlist_id" component={Wishlist} />

                <Route path="/shoes/:shoe_id" component={ShoeDetail} />
                <Route path="/AddShoe" component={AddShoe} />
                <Route path="/AddWish" exact component={AddWish} />
              </Switch>
            </ShugameContext.Provider>
          </BoundaryError>
        </div>
      </Router>
    );
  }
}

export default App;
