import React from "react";
import {
  Card,
  ICardSectionStyles,
  ICardSectionTokens,
  ICardTokens,
} from "@uifabric/react-cards";
import { Text, FontWeights, IIconStyles, Icon, Stack } from "@fluentui/react";

export const BedListItem: React.FC = () => {
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

  const footerCardSectionTokens: ICardSectionTokens = {
    padding: "12px 0px 0px",
  };

  const cardTokens: ICardTokens = { childrenMargin: 12 };

  return (
    <Stack>
      <Card tokens={cardTokens}>
        <Card.Section>
          <Text>Leito 001</Text>
          <Text variant="small">Francisco das Chagas</Text>
          <Text variant="small"></Text>
        </Card.Section>
        <Card.Section
          horizontal
          styles={footerCardSectionStyles}
          tokens={footerCardSectionTokens}
        >
          <Icon iconName="RedEye" styles={iconStyles} />
          <Icon iconName="SingleBookmark" styles={iconStyles} />
          <Stack.Item>
            <span />
          </Stack.Item>
          <Icon iconName="MoreVertical" styles={iconStyles} />
        </Card.Section>
      </Card>
    </Stack>
  );
};
