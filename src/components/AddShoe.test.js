import React from "react";
import ReactDOM from "react-dom";
import AddShoe from "./AddShoe";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AddShoe />, div);
  ReactDOM.unmountComponentAtNode(div);
});
