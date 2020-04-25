import React, { FC } from "react";
import { Stack, IStackTokens, IStackStyles } from "@fluentui/react";
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
  return (
    <Stack
      wrap
      horizontal
      horizontalAlign="space-around"
      styles={stackStyling}
      tokens={stackTokens}
    >
      {beds.map((item, index) => (
        <BedListItem key={index}></BedListItem>
      ))}
    </Stack>
  );
};
