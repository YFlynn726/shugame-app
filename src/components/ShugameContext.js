import React from "react";

const ShugameContext = React.createContext({
  users: [],
  shoes: [],
  wishlist: [],
  addUser: () => {},
  deleteShoe: () => {},
  addWish: () => {},
  addShoe: () => {},
});

export default ShugameContext;
