import React from "react";
import { Stack, Text } from "office-ui-fabric-react";

import "./home.scss";

export const homeRoute: string = "/home";
export const HomePage: React.FC = () => (
  <Stack verticalAlign="center" horizontalAlign="center" verticalFill gap={15}>
    <Text>hey</Text>
    <Text>hey</Text>
    <Text>hey</Text>
  </Stack>
);
