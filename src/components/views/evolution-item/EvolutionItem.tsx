import React, { FC, Dispatch } from "react";

import {
  ActivityItem,
  mergeStyleSets,
  Image,
  Text,
  DefaultButton,
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

interface IEvolutionItemProps {
  evolution: IEvolution;
}

const classNames = mergeStyleSets({
  exampleRoot: {
    marginTop: "20px",
  },

  timestampContainer: {
    marginTop: 8,
  },

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
          marginBottom: 16,
          marginRight: 64,
        },
      }}
    >
      {token.toUpperCase()}
    </Text>
  ));

const renderActivityIcon = (evolution: IEvolution): JSX.Element => (
  <Image src={getIcon(evolution.type)} width={50} height={50} />
);

const renderTimestamp = (
  dispatch: Dispatch<any>,
  evolution: IEvolution
): JSX.Element => (
  <div className={classNames.timestampContainer}>
    <DefaultButton
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

  const item = {
    key: evolution.id,
    activityDescription: [<EvolutionTitle evolution={evolution} />],
    comments: renderComments(evolution),
    activityIcon: renderActivityIcon(evolution),
    timeStamp: renderTimestamp(dispatch, evolution),
  };

  return (
    <ActivityItem {...item} key={item.key} className={classNames.exampleRoot} />
  );
};
