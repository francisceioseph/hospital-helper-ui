import React, { FC } from "react";
import { Stack, IStackStyles, StackItem, Text } from "@fluentui/react";
import { BedListItem } from "./bed-item/BedListItem";

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

const listStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  maxHeight: "89vh",
  overflowY: "scroll",
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
    <div style={listStyle}>
      {beds.map((bed, index) => (
        <BedListItem key={index} internship={bed}></BedListItem>
      ))}
    </div>
  );

  // return (
  //   <Stack
  //     wrap
  //     horizontal
  //     horizontalAlign="start"
  //     styles={stackStyling}
  //     tokens={stackTokens}
  //   >
  //     {beds.map((bed, index) => (
  //       <BedListItem key={index} internship={bed}></BedListItem>
  //     ))}
  //   </Stack>
  // );
};
