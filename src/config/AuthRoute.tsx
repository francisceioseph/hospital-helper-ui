import React from "react";
import { Stack } from "office-ui-fabric-react";
import { RouteProps, Route } from "react-router";

import { SideMenu } from "../components/side-menu/SideMenu";

export const AuthRoute: React.FC<RouteProps> = (props) => {
  return (
    <Stack
      verticalAlign="start"
      horizontal
      horizontalAlign="start"
      verticalFill
    >
      <SideMenu />
      <Route {...props} />
    </Stack>
  );
};
