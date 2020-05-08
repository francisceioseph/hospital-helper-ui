import React, { FC, Dispatch } from "react";

import {
  ActivityItem,
  mergeStyleSets,
  Image,
  Text,
  IActivityItemProps,
  IImageStyles,
  Separator,
  ISeparatorStyles,
  CommandButton,
} from "@fluentui/react";
import { IEvolution } from "../../../types/models/evolution.interface";
import { EvolutionTitle } from "./EvolutionTitle";

import nurseIcon from "../../images/icons/enfermagem.png";
import fisioIcon from "../../images/icons/fisioterapia.png";
import doctorIcon from "../../images/icons/medico.png";
import unknownIcon from "../../images/icons/desconhecido.png";
import { useDispatch } from "react-redux";
import {
  setEvolution,
  showEvolutionDialog,
} from "../../../redux/actions/evolutions.actions";
import {
  Card,
  CardSection,
  ICardStyles,
  ICardSectionStyles,
} from "@uifabric/react-cards";

interface IEvolutionItemProps {
  evolution: IEvolution;
}

const classNames = mergeStyleSets({
  exampleRoot: {
    marginTop: "20px",
  },

  timestampContainer: {},

  timestamp: {
    padding: 2,
    border: "1px solid lightgrey",
    borderRadius: 2,
  },
});

const getIcon = (type: "medico" | "enfermagem" | "fisioterapia") => {
  switch (type) {
    case "medico":
      return doctorIcon;
    case "enfermagem":
      return nurseIcon;
    case "fisioterapia":
      return fisioIcon;
    default:
      return unknownIcon;
  }
};

const renderComments = (evolution: IEvolution): JSX.Element[] =>
  evolution.text.split("\n").map((token) => (
    <Text
      block
      variant="mediumPlus"
      styles={{
        root: {
          textAlign: "left",
          marginRight: 64,
        },
      }}
    >
      {token.toUpperCase()}
    </Text>
  ));

const renderActivityIcon = (evolution: IEvolution): JSX.Element => {
  const styles: Partial<IImageStyles> = {
    root: {
      width: 48,
      height: 48,
      border: "1px solid #3498DB",
      borderRadius: "50%",
      padding: 8,
    },
  };

  return (
    <Image
      src={getIcon(evolution.type)}
      width={32}
      height={32}
      styles={styles}
    />
  );
};

const renderCardFooter = (
  dispatch: Dispatch<any>,
  evolution: IEvolution
): JSX.Element => (
  <div className={classNames.timestampContainer}>
    <CommandButton
      iconProps={{ iconName: "PageEdit" }}
      text="Editar"
      onClick={() => {
        dispatch(setEvolution(evolution));
        dispatch(showEvolutionDialog(true));
      }}
    />
  </div>
);

export const EvolutionItem: FC<IEvolutionItemProps> = ({ evolution }) => {
  const dispatch = useDispatch();

  const item: IActivityItemProps = {
    activityIcon: renderActivityIcon(evolution),
    activityDescription: [<EvolutionTitle evolution={evolution} />],
  };

  const cardStyles: ICardStyles = {
    root: {
      paddingRight: 16,
      paddingLeft: 16,
      margin: 16,
      maxWidth: "98%",
    },
  };

  const commentStyles: ICardSectionStyles = { root: { marginLeft: 57 } };
  const separatorSectionStyles: ICardSectionStyles = {
    root: { margin: 0, marginLeft: 57 },
  };
  const separatorStyles: Partial<ISeparatorStyles> = {
    root: { margin: 0, height: 8 },
  };
  const timeStampSectionStyles: ICardSectionStyles = {
    root: { marginLeft: 57, marginTop: "0 !important", marginBottom: 8 },
  };

  return (
    <div>
      <Card styles={cardStyles}>
        <CardSection>
          <ActivityItem
            {...item}
            key={evolution.id}
            className={classNames.exampleRoot}
          />
        </CardSection>

        <CardSection styles={commentStyles}>
          {renderComments(evolution)}
        </CardSection>

        <CardSection styles={separatorSectionStyles}>
          <Separator styles={separatorStyles} />
        </CardSection>

        <CardSection styles={timeStampSectionStyles}>
          {renderCardFooter(dispatch, evolution)}
        </CardSection>
      </Card>
    </div>
  );
};
