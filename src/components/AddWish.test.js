import React from "react";
import ReactDOM from "react-dom";
import AddWish from "./AddWish";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AddWish />, div);
  ReactDOM.unmountComponentAtNode(div);
});
