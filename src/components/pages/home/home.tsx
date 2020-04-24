import React from "react";
import { Stack } from "office-ui-fabric-react";

import "./home.scss";
import { SideMenu } from "../../side-menu/SideMenu";

export const homeRoute: string = "/home";
export const HomePage: React.FC = () => (
  <Stack verticalAlign="start" horizontalAlign="start" verticalFill>
    <SideMenu></SideMenu>
  </Stack>
);
