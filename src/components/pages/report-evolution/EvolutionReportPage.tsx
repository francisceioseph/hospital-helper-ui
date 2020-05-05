import React, { FC } from "react";
import {
  Stack,
  StackItem,
  PrimaryButton,
  IStackTokens,
  IStackStyles,
} from "@fluentui/react";
import { EvolutionReportHeader } from "../../views/evolution-report-header/EvolutionReportHeader";
import { PtDatePicker } from "../../views/date-picker/date-picker";

export const evolutionReportRoute = "/auth/reports/evolution";

const stackTokens: IStackTokens = {
  childrenGap: 15,
};

const containerStyles: IStackStyles = {
  root: {
    padding: "0 2% 0 2%",
  },
};

export const EvolutionReportPage: FC = () => {
  return (
    <Stack grow verticalFill tokens={stackTokens}>
      <StackItem>
        <EvolutionReportHeader />
      </StackItem>
      <StackItem>
        <Stack horizontal tokens={stackTokens} styles={containerStyles}>
          <PtDatePicker />
          <PrimaryButton text="Gerar Relatório" />
        </Stack>
      </StackItem>
    </Stack>
  );
};
