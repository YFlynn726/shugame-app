import React from "react";
import ReactDOM from "react-dom";
import UserPage from "./UserPage";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<UserPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
