import React from "react";
import { BedsList } from "../../beds-list/BedsList";
import { Stack, StackItem, Text, IStackItemStyles } from "@fluentui/react";

export const bedsRoute = "/auth/beds";

const titleStyles: IStackItemStyles = {
  root: {
    padding: "2vh 1rem 2vh 1rem",
    height: "8vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
};

export const BedsPage: React.FC = () => {
  return (
    <Stack>
      <StackItem styles={titleStyles}>
        <Text variant="large">Leitos</Text>
      </StackItem>
      <StackItem>
        <BedsList beds={Array(355).fill(32)}></BedsList>
      </StackItem>
    </Stack>
  );
};
