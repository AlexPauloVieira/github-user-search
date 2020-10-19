import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/search'>
          <SearchPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
