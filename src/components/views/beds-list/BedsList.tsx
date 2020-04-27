import React, { FC } from "react";
import {
  Stack,
  IStackTokens,
  IStackStyles,
  StackItem,
  Text,
} from "@fluentui/react";
import { BedListItem } from "./BedListItem";

interface IBedsListProps {
  beds: Array<any>;
}

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

const stackTokens: IStackTokens = {
  childrenGap: 8,
};

export const BedsList: FC<IBedsListProps> = ({ beds }) => {
  if (beds.length === 0) {
    return (
      <Stack
        verticalAlign="center"
        horizontalAlign="center"
        styles={stackStyling}
      >
        <StackItem>
          <Text variant="large">Todos os leitos estão vazios</Text>
        </StackItem>
      </Stack>
    );
  }

  return (
    <Stack
      wrap
      horizontal
      horizontalAlign="start"
      styles={stackStyling}
      tokens={stackTokens}
    >
      {beds.map((bed, index) => (
        <BedListItem key={index} bed={bed}></BedListItem>
      ))}
    </Stack>
  );
};
