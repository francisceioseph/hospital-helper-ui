import React, { FC } from "react";
import { Stack, StackItem } from "@fluentui/react";
import { EvolutionReportHeader } from "../../views/evolution-report-header/EvolutionReportHeader";

export const evolutionReportRoute = "/auth/reports/evolution";

export const EvolutionReportPage: FC = () => {
  // TODO: IMPLEMENT THE EVOLUTION REPORT COMPONENT.
  return (
    <Stack grow tokens={{ childrenGap: 15 }}>
      <StackItem>
        <EvolutionReportHeader />
      </StackItem>
    </Stack>
  );
};
