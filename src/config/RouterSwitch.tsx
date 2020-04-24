import React from "react";
import { Switch, Route, Redirect } from "react-router";
import { loginRoute, LoginPage } from "../components/pages/login/LoginPage";
import { PrivateRoute } from "./PrivateRoute";
import { AuthSwitch } from "./AuthSwitch";

export const RouterSwitch: React.FC = () => (
  <Switch>
    <Route exact path={loginRoute} component={LoginPage} />
    <PrivateRoute path="/auth">
      <AuthSwitch />
    </PrivateRoute>

    <Route path="/">
      <Redirect to={loginRoute} />
    </Route>
  </Switch>
);
