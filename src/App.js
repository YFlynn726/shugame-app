import React from "react";
import Nav from "./components/Nav";
import AddShoe from "./components/AddShoe";
import LandingPage from "./components/Landingpage";
import Mainpage from "./components/Mainpage";
import ShoeDetail from "./components/ShoeDetail";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddWish from "./components/AddWish";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/welcome" component={Mainpage} />
          <Route path="/users/:user_id" component={ShoeDetail} />
          <Route path="/addshoe" component={AddShoe} />
          <Route path="/AddWish" exact component={AddWish} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
