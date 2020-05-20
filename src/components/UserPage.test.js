import React from "react";
import ReactDOM from "react-dom";
import UserPage from "./UserPage";
import ShugameContext from "./ShugameContext";
import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const props = {
    match: { params: { user_id: 3 } },
  };
  const contextValue = {
    users: [
      {
        id: "1",
        name: "John Doe",
        shoe_name: "Adidas Boost",
      },
      {
        id: "2",
        name: "Samantha Rock",
        shoe_name: "Nike React Infinity",
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
  };
  ReactDOM.render(
    <Router>
      <ShugameContext.Provider value={contextValue}>
        <UserPage {...props} />
      </ShugameContext.Provider>
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
