import React from "react";
import ReactDOM from "react-dom";
import Wishlist from "./Wishlist";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Wishlist />, div);
  ReactDOM.unmountComponentAtNode(div);
});
