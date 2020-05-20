import React from "react";
import ReactDOM from "react-dom";
import ShoeDetail from "./ShoeDetail";
import ShugameContext from "./ShugameContext";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const props = {
    match: { params: { shoe_id: 3 } },
  };
  const contextValue = {
    shoes: this.context.shoes,
  };
  ReactDOM.render(
    <ShugameContext.Provider value={contextValue}>
      <ShoeDetail {...props} />
    </ShugameContext.Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

//mock context
//change version of react dom 5.0.0 - then delete node module folder - then npm i
