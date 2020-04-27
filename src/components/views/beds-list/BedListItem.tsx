import React, { FC } from "react";
import {
  Card,
  ICardSectionStyles,
  ICardSectionTokens,
  ICardTokens,
} from "@uifabric/react-cards";
import {
  Text,
  FontWeights,
  IIconStyles,
  Icon,
  Stack,
  StackItem,
  IStackItemStyles,
} from "@fluentui/react";
import { IInternship } from "../../../types/internship.interface";

interface IBedListItemProps {
  bed: IInternship;
}

export const BedListItem: FC<IBedListItemProps> = ({ bed }) => {
  const footerCardSectionStyles: ICardSectionStyles = {
    root: {
      borderTop: "1px solid #F3F2F1",
    },
  };

  const iconStyles: IIconStyles = {
    root: {
      color: "#0078D4",
      fontSize: 16,
      fontWeight: FontWeights.regular,
    },
  };

  const rootStackItemStyles: IStackItemStyles = {
    root: {
      height: "fit-content",
    },
  };

  const footerCardSectionTokens: ICardSectionTokens = {
    padding: "12px 0px 0px",
  };

  const cardTokens: ICardTokens = { childrenMargin: 12 };

  return (
    <StackItem styles={rootStackItemStyles}>
      <Card tokens={cardTokens}>
        <Card.Section>
          <Text>{bed.Bed?.name}</Text>
          <Text variant="small">{bed.Pacient?.fullName}</Text>
        </Card.Section>
        <Card.Section
          horizontal
          styles={footerCardSectionStyles}
          tokens={footerCardSectionTokens}
        >
          <Icon iconName="RedEye" styles={iconStyles} />
          <Icon iconName="SingleBookmark" styles={iconStyles} />
          <Stack.Item grow>
            <span />
          </Stack.Item>
          <Icon iconName="MoreVertical" styles={iconStyles} />
        </Card.Section>
      </Card>
    </StackItem>
  );
};
