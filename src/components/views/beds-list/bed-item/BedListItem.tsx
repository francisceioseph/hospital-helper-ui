import React, { FC, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Card, CardSection } from "@uifabric/react-cards";
import {
  Text,
  ContextualMenu,
  IContextualMenuItem,
  CommandButton,
  Image,
  IImageStyles,
} from "@fluentui/react";
import { IInternship } from "../../../../types/models/internship.interface";
import { footerCardSectionStyles } from "./BedListItem.style";
import { cardTokens, footerCardSectionTokens } from "./BedListItem.tokens";
import { ChangeBedDialog } from "../change-bed/change-bed";
import { InternshipService } from "../../../../service/internship.service";
import { loadInternships } from "../../../../redux/actions/internship.actions";
import { ConfirmDialog } from "../../confirm-dialog/confirm-dialog";
import { useHistory } from "react-router";
import { getPacientDetailsRoute } from "../../../pages/pacient/PacientDetailsPage";

import internshipIcon from "../../../images/icons/internship.png";

interface IBedListItemProps {
  internship: IInternship;
}

const bedIconStyles: Partial<IImageStyles> = {
  root: {
    width: 40,
    height: 40,
    border: "1px solid #3498DB",
    borderRadius: "50%",
    padding: 8,
  },
};

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
    <div style={{ margin: 8 }}>
      <Card tokens={cardTokens}>
        <CardSection horizontal>
          <CardSection>
            <Image
              src={internshipIcon}
              width={24}
              height={24}
              styles={bedIconStyles}
            />
          </CardSection>
          <CardSection>
            <Text variant="smallPlus">{internship.Bed?.name}</Text>
            <Text variant="small">{internship.Pacient?.fullName}</Text>
          </CardSection>
        </CardSection>

        <CardSection
          horizontal
          styles={footerCardSectionStyles}
          tokens={footerCardSectionTokens}
        >
          <CardSection grow>
            <span />
          </CardSection>
          <div ref={moreIconRef}>
            <CommandButton
              styles={{ root: { margin: 0, height: 24 } }}
              text="Opções"
              iconProps={{ iconName: "AllApps" }}
              onClick={() => setShowMoreMenu(true)}
            />
          </div>
          <ContextualMenu
            target={moreIconRef}
            items={menuItems}
            hidden={!showMoreMenu}
            onItemClick={() => setShowMoreMenu(false)}
            onDismiss={() => setShowMoreMenu(false)}
          />
        </CardSection>
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
    </div>
  );
};
