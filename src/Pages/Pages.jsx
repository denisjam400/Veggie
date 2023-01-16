import Home from "./Home";
import React from "react";
// import Cuisine from "./Cuisine";
import { Route, BrowserRouter as Routes } from "react-router-dom";

const Pages = () => {
  return (
    <Routes>
      <Route exact path="/">
        <Home />
      </Route>
    </Routes>
  );
};

export default Pages;
