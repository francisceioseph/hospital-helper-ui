import React, { FC } from "react";
import { Stack } from "office-ui-fabric-react";
import { Route, Switch } from "react-router";

import { SideMenu } from "../components/views/side-menu/SideMenu";
import { homeRoute, HomePage } from "../components/pages/home/home";
import {
  internshipRoute,
  InternshipPage,
} from "../components/pages/beds/InternshipPage";
import {
  addPacientRoute,
  AddPacientPage,
} from "../components/pages/pacient/AddPacientPage";
import {
  pacientListRouteName,
  PacientPageList,
} from "../components/pages/pacient/PacientListPage";

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
        <Route exact path={homeRoute} component={HomePage} />
        <Route exact path={internshipRoute} component={InternshipPage} />
        <Route exact path={pacientListRouteName} component={PacientPageList} />
        <Route exact path={addPacientRoute} component={AddPacientPage} />
      </Switch>
    </Stack>
  );
};
