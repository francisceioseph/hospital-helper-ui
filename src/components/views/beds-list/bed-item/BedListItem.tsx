import React, { FC, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Card } from "@uifabric/react-cards";
import {
  Text,
  Stack,
  StackItem,
  ContextualMenu,
  IContextualMenuItem,
  TooltipHost,
  CommandButton,
} from "@fluentui/react";
import { IInternship } from "../../../../types/models/internship.interface";
import {
  rootStackItemStyles,
  footerCardSectionStyles,
} from "./BedListItem.style";
import { cardTokens, footerCardSectionTokens } from "./BedListItem.tokens";
import { ChangeBedDialog } from "../change-bed/change-bed";
import { InternshipService } from "../../../../service/internship.service";
import { loadInternships } from "../../../../redux/actions/internship.actions";
import { ConfirmDialog } from "../../confirm-dialog/confirm-dialog";
import { useHistory } from "react-router";
import { getPacientDetailsRoute } from "../../../pages/pacient/PacientDetailsPage";

interface IBedListItemProps {
  internship: IInternship;
}

export const BedListItem: FC<IBedListItemProps> = ({ internship }) => {
  const internshipService = new InternshipService();

  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [showChangeBedDialog, setShowChangeBedDialog] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const menuItems: IContextualMenuItem[] = [
    {
      key: "alta-hospitalar",
      text: "Alta Hospitalar",
      iconProps: { iconName: "OutOfOffice" },
      onClick: () => {
        setShowConfirmDialog(true);
      },
    },
    {
      key: "evoluções",
      text: "Evolução do Paciente",
      iconProps: { iconName: "Health" },
      onClick: () => {
        handleEvolutionClick();
      },
    },
    {
      key: "histórico-internações",
      text: "Histórico de Internações",
      iconProps: { iconName: "History" },
      onClick: () => viewDetailsClickHandler(),
    },
    {
      key: "trocar-de-leito",
      text: "Trocar de Leito",
      iconProps: { iconName: "SchoolDataSyncLogo" },
      onClick: () => {
        setShowChangeBedDialog(true);
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

  const handleEvolutionClick = () => {
    history.push(`/auth/internship/${internship.id}/evolution`);
  };

  const viewDetailsClickHandler = () => {
    history.push(getPacientDetailsRoute(internship.pacientId));
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
          <Stack.Item grow>
            <span />
          </Stack.Item>
          <TooltipHost content="Mais" id="tooltip-more">
            <div ref={moreIconRef}>
              <CommandButton
                styles={{ root: { margin: 0 } }}
                text="Opções"
                iconProps={{ iconName: "AllApps" }}
                onClick={() => setShowMoreMenu(true)}
              />
            </div>
          </TooltipHost>
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
