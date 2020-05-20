import React from "react";
import ReactDOM from "react-dom";
import Wishlist from "./Wishlist";
import ShugameContext from "./ShugameContext";
import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const props = {
    match: { params: { user_id: 3, wishlist_id: 1 } },
    // match: { params: { wishlist_id: 1 } },
  };
  const contextValue = {
    wishlist: [
      {
        name: "Nike React Infinity",
        user_Id: "2",
        Order_link:
          "https://www.nike.com/t/react-infinity-run-flyknit-womens-running-shoe-c54NMG/CD4372-004",
      },
      {
        name: "Adidas Boost",
        user_Id: "1",
        Order_link: "https://www.adidas.com/us/ultraboost-20-shoes/EG0691.html",
      },
    ],
    shoes: [
      {
        user_Id: "2",
        shoe_name: "Nike React Infinity",
        shoe_size: 6,
        usage: "219 miles",
        Order_link:
          "https://www.nike.com/t/react-infinity-run-flyknit-womens-running-shoe-c54NMG/CD4372-004",
      },
      {
        user_Id: "1",
        shoe_name: "Adidas Boost",
        shoe_size: 8.5,
        usage: "300 miles",
        Order_link: "https://www.adidas.com/us/ultraboost-20-shoes/EG0691.html",
      },
    ],
  };
  ReactDOM.render(
    <Router>
      <ShugameContext.Provider value={contextValue}>
        <Wishlist {...props} />
      </ShugameContext.Provider>
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
