import { Route, Routes as Switch } from "react-router-dom";
import React from "react";
import Home from "../components/Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
    </Switch>
  );
};

export default Routes;
