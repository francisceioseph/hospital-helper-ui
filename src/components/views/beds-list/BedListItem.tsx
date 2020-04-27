import React, { FC, useState, useRef } from "react";
import { Card } from "@uifabric/react-cards";
import {
  Text,
  Icon,
  Stack,
  StackItem,
  ContextualMenu,
  IContextualMenuItem,
} from "@fluentui/react";
import { IInternship } from "../../../types/internship.interface";
import {
  rootStackItemStyles,
  footerCardSectionStyles,
  iconStyles,
} from "./BedListItem.style";
import { cardTokens, footerCardSectionTokens } from "./BedListItem.tokens";

interface IBedListItemProps {
  bed: IInternship;
}

export const BedListItem: FC<IBedListItemProps> = ({ bed }) => {
  const menuItems: IContextualMenuItem[] = [
    {
      key: "trocar-de-leito",
      text: "Trocar de Leito",
      onClick: () => {},
    },
    {
      key: "dar-alta-paciente",
      text: "Dar Alta",
      onClick: () => {},
    },
  ];

  const moreIconRef = useRef(null);

  const [showMoreMenu, setShowMoreMenu] = useState(true);

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

          <div ref={moreIconRef}>
            <Icon
              iconName="MoreVertical"
              styles={iconStyles}
              onClick={() => setShowMoreMenu(true)}
            ></Icon>
          </div>
          <ContextualMenu
            target={moreIconRef}
            items={menuItems}
            hidden={!showMoreMenu}
            onItemClick={() => setShowMoreMenu(false)}
            onDismiss={() => setShowMoreMenu(false)}
          />
        </Card.Section>
      </Card>
    </StackItem>
  );
};
