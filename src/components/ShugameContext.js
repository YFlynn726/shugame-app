import React from "react";

const ShugameContext = React.createContext({
  users: [],
  shoes: [],
  wishlist: [],
  addUser: () => {},
  deleteShoe: () => {},
  deleteWish: () => {},
  addWish: () => {},
  addShoe: () => {},
  updateUsage: () => {},
});

export default ShugameContext;
