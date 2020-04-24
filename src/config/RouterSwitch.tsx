import React from "react";
import { Switch, Route, Redirect } from "react-router";
import { homeRoute, HomePage } from "../components/pages/home/home";

export const RouterSwitch: React.FC = () => (
  <Switch>
    <Route exact path={homeRoute} component={HomePage} />

    <Route path="/">
      <Redirect to={homeRoute} />
    </Route>
  </Switch>
);
