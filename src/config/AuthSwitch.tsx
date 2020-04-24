import React, { FC } from "react";
import { Stack } from "office-ui-fabric-react";
import { Route, Switch } from "react-router";

import { SideMenu } from "../components/side-menu/SideMenu";
import { homeRoute, HomePage } from "../components/pages/home/home";
import { bedsRoute, BedsPage } from "../components/pages/beds/BedsPage";

export const AuthSwitch: FC = () => {
  return (
    <Stack
      verticalAlign="start"
      horizontal
      horizontalAlign="start"
      verticalFill
    >
      <SideMenu />

      <Switch>
        <Route exact path={`${homeRoute}`} component={HomePage} />
        <Route exact path={`${bedsRoute}`} component={BedsPage} />
      </Switch>
    </Stack>
  );
};
