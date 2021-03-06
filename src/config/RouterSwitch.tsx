import React, { FC } from "react";
import { Stack } from "office-ui-fabric-react";
import { Route, Switch, Redirect } from "react-router";

import { SideMenu } from "../components/views/side-menu/SideMenu";
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
import {
  pacientEvolutionRoute,
  PacientEvolutionPage,
} from "../components/pages/evolution/PacientEvolutionPage";
import {
  pacientDetailsPageRoute,
  PacientDetailsPage,
} from "../components/pages/pacient/PacientDetailsPage";
import {
  evolutionReportRoute,
  EvolutionReportPage,
} from "../components/pages/report-evolution/EvolutionReportPage";
import {
  createBedRoute,
  CreateBedPage,
} from "../components/pages/beds/CreateBedPage";

export const RouterSwitch: FC = () => {
  return (
    <Stack
      verticalAlign="start"
      horizontal
      horizontalAlign="start"
      verticalFill
    >
      <SideMenu />

      <Switch>
        <Route exact path={internshipRoute} component={InternshipPage} />
        <Route exact path={pacientListRouteName} component={PacientPageList} />
        <Route exact path={addPacientRoute} component={AddPacientPage} />
        <Route exact path={createBedRoute} component={CreateBedPage} />
        <Route
          exact
          path={pacientEvolutionRoute}
          component={PacientEvolutionPage}
        />
        <Route
          exact
          path={pacientDetailsPageRoute}
          component={PacientDetailsPage}
        />
        <Route
          exact
          path={evolutionReportRoute}
          component={EvolutionReportPage}
        />

        <Route path="/">
          <Redirect to={internshipRoute} />
        </Route>
      </Switch>
    </Stack>
  );
};
