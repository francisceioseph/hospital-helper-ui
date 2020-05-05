import React, { FC } from "react";
import {
  Stack,
  StackItem,
  Text,
  IStackTokens,
  IStackStyles,
} from "@fluentui/react";

const headerStyles: IStackStyles = {
  root: {
    margin: "16px 2% 16px 2%",
  },
};

const headerTokens: IStackTokens = {
  childrenGap: 15,
};

export const EvolutionReportHeader: FC = () => {
  return (
    <Stack
      horizontal
      horizontalAlign="space-between"
      verticalAlign="center"
      tokens={headerTokens}
      styles={headerStyles}
    >
      <StackItem>
        <Text variant="large">Relatório de Evolução</Text>
      </StackItem>
      <StackItem grow>
        <div></div>
      </StackItem>
    </Stack>
  );
};
