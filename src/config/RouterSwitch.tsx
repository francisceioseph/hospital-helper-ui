import React from "react";
import { Switch, Route, Redirect } from "react-router";
import { homeRoute, HomePage } from "../components/pages/home/home";
import { loginRoute, LoginPage } from "../components/pages/login/LoginPage";
import { AuthRoute } from "./AuthRoute";

export const RouterSwitch: React.FC = () => (
  <Switch>
    <Route exact path={loginRoute} component={LoginPage} />
    <AuthRoute exact path={homeRoute} component={HomePage} />

    <Route path="/">
      <Redirect to={loginRoute} />
    </Route>
  </Switch>
);
