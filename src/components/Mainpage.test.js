import React from "react";
import ReactDOM from "react-dom";
import Mainpage from "./Mainpage";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Mainpage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
