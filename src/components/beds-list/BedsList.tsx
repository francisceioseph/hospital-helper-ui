import React from "react";
import { Stack, IStackStyles, StackItem, Text } from "@fluentui/react";

export const BedsList: React.FC = () => {
  const outterStackStyles: IStackStyles = {
    root: {
      padding: "1rem",
    },
  };

  return (
    <Stack styles={outterStackStyles}>
      <StackItem>
        <Text variant="large">Home</Text>
      </StackItem>
    </Stack>
  );
};
