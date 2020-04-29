import React, { FC } from "react";
import Moment from "react-moment";
import "moment/locale/pt-br";
import "moment-timezone";

import { ActivityItem, mergeStyleSets, Image, Text } from "@fluentui/react";
import { IEvolution } from "../../../../types/models/evolution.interface";
import { EvolutionTitle } from "./EvolutionTitle";

import nurseIcon from "../../../images/icons/enfermagem.png";
import fisioIcon from "../../../images/icons/fisioterapia.png";
import doctorIcon from "../../../images/icons/medico.png";
import unknownIcon from "../../../images/icons/desconhecido.png";

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

export const EvolutionItem: FC<IEvolutionItemProps> = ({ evolution }) => {
  const item = {
    key: evolution.id,
    activityDescription: [<EvolutionTitle evolution={evolution} />],
    comments: [<Text variant="mediumPlus">{evolution.text}</Text>],
    activityIcon: (
      <Image src={getIcon(evolution.type)} width={50} height={50} />
    ),
    timeStamp: (
      <div className={classNames.timestampContainer}>
        <Text variant="medium" className={classNames.timestamp}>
          <Moment fromNow date={evolution.createdAt} />
        </Text>
      </div>
    ),
  };

  return (
    <ActivityItem {...item} key={item.key} className={classNames.exampleRoot} />
  );
};
