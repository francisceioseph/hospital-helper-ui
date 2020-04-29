import React, { FC, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Card } from "@uifabric/react-cards";
import {
  Text,
  Icon,
  Stack,
  StackItem,
  ContextualMenu,
  IContextualMenuItem,
} from "@fluentui/react";
import { IInternship } from "../../../../types/models/internship.interface";
import {
  rootStackItemStyles,
  footerCardSectionStyles,
  iconStyles,
} from "./BedListItem.style";
import { cardTokens, footerCardSectionTokens } from "./BedListItem.tokens";
import { ChangeBedDialog } from "../change-bed/change-bed";
import { InternshipService } from "../../../../service/internship.service";
import { loadInternships } from "../../../../redux/actions/internship-actions";
import { ConfirmDialog } from "../../confirm-dialog/confirm-dialog";

interface IBedListItemProps {
  internship: IInternship;
}

export const BedListItem: FC<IBedListItemProps> = ({ internship }) => {
  const internshipService = new InternshipService();

  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [showChangeBedDialog, setShowChangeBedDialog] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const dispatch = useDispatch();

  const menuItems: IContextualMenuItem[] = [
    {
      key: "trocar-de-leito",
      text: "Trocar de Leito",
      onClick: () => {
        setShowChangeBedDialog(true);
      },
    },
    {
      key: "alta-hospitalar",
      text: "Alta Hospitalar",
      onClick: () => {
        setShowConfirmDialog(true);
      },
    },
  ];

  const moreIconRef = useRef(null);

  const updateBedId = (bedId: number) => {
    const data = {
      bedId,
    };

    internshipService.update(internship.id, data).then(() => {
      setShowChangeBedDialog(false);
      dispatch(loadInternships());
    });
  };

  const releasePacient = () => {
    const data = {
      endDate: new Date(),
    };

    internshipService.update(internship.id, data).then(() => {
      setShowConfirmDialog(false);
      dispatch(loadInternships());
    });
  };

  return (
    <StackItem styles={rootStackItemStyles}>
      <Card tokens={cardTokens}>
        <Card.Section>
          <Text>{internship.Bed?.name}</Text>
          <Text variant="small">{internship.Pacient?.fullName}</Text>
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

      <ChangeBedDialog
        internship={internship}
        hidden={!showChangeBedDialog}
        onSaveClick={updateBedId}
        onCancelClick={() => {
          setShowChangeBedDialog(false);
        }}
      />

      <ConfirmDialog
        showDialog={showConfirmDialog}
        onOkClick={() => {
          releasePacient();
        }}
        onCancelClick={() => setShowConfirmDialog(false)}
      />
    </StackItem>
  );
};
