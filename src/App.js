import React, { Component } from "react";
import Nav from "./components/Nav";
import AddShoe from "./components/AddShoe";
import LandingPage from "./components/Landingpage";
import Mainpage from "./components/Mainpage";
import ShoeDetail from "./components/ShoeDetail";
import "./App.css";
import config from "./config";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddWish from "./components/AddWish";
import ShugameContext from "./components/ShugameContext";
import BoundaryError from "./components/BoundaryError";

class App extends Component {
  state = {
    shoes: [],
    users: [],
    wishlist: [],
    addUser: this.addUser,
    addShoe: this.addShoe,
    addWish: this.addWish,
    deleteShoe: this.deleteShoe,
    updateUsage: this.updateUsage,
  };

  updateUsage = (usage, shoe) => {
    console.log(usage);
    const newUsage = {
      usage: usage,
    };
    console.log(newUsage);

    fetch(`${config.API_ENDPOINT}api/shoes/${shoe.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUsage),
    })
      .then((res) => {
        console.log(res);

        return res.json();
      })
      .then((data) => {
        console.log("Request success: ", data);
        console.log(Response.id);
        this.setState({
          //id: Response.id,
          updateUsage: [...this.state.updateUsage, data],
        });
        console.log(Response.id);
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

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}api/shoes`),
      fetch(`${config.API_ENDPOINT}api/users`),
    ])
      .then(([shoesRes, usersRes]) => {
        if (!shoesRes.ok) return shoesRes.json().then((e) => Promise.reject(e));
        if (!usersRes.ok) return usersRes.json().then((e) => Promise.reject(e));

        return Promise.all([shoesRes.json(), usersRes.json()]);
      })
      .then(([shoes, users]) => {
        //console.log(notes);
        this.setState({ shoes, users });
      })
      .catch((error) => {
        console.error({ error });
      });
  }

  addUser = (first_name, last_name) => {
    console.log(first_name, last_name);
    const newUser = {
      first_name: first_name,
      last_name: last_name,
    };
    console.log(newUser);

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

    // console.log(newUser);

    // console.log(this.state.users);
    // console.log(this.state.shoes);
  };

  addShoe = (shoe, shoe_size, usage, order_link, user_id) => {
    console.log(shoe);
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

    console.log(newShoe);
    console.log(this.state.shoes);
  };

  addWish = (shoe_name, shoe_size, order_link, user_id) => {
    console.log(shoe_name, shoe_size, order_link, user_id);
    const newWishlistItem = {
      name: shoe_name,
      shoe_size: shoe_size,
      order_link: order_link,
      user_id,
    };
    console.log(newWishlistItem);

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

    console.log(newWishlistItem);
    console.log(this.state.wishlist);
  };

  render() {
    const contextValue = {
      shoes: this.state.shoes,
      users: this.state.users,
      wishlist: this.state.wishlist,
      addShoe: this.addShoe,
      deleteShoe: this.deleteShoe,
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
                <Route path="/users/:user_id" component={ShoeDetail} />
                <Route path="/addshoe" component={AddShoe} />
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
