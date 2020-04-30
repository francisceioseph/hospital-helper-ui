import React, { FC } from "react";
import { Stack, StackItem, Text, IStackStyles } from "@fluentui/react";

const stackStyling: IStackStyles = {
  root: {
    height: "85vh",
    overflowY: "scroll",
    overflowX: "hidden",
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 16,
  },
};

export const EvolutionListPlaceholder: FC = () => (
  <StackItem>
    <Stack
      styles={stackStyling}
      verticalAlign="center"
      horizontalAlign="center"
    >
      <Text variant="large">
        Nenhuma evolução registrada para este paciente.
      </Text>
    </Stack>
  </StackItem>
);
