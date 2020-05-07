import React, { FC } from "react";
import { mergeStyleSets, Text } from "@fluentui/react";
import { IEvolution } from "../../../types/models/evolution.interface";

import "moment/locale/pt-br";
import "moment-timezone";
import Moment from "react-moment";

interface IEvolutionItemProps {
  evolution: IEvolution;
}

export const EvolutionTitle: FC<IEvolutionItemProps> = ({ evolution }) => {
  let title;

  const classes = mergeStyleSets({
    root: {
      marginBottom: 8,
    },
    title: {
      color: "blue",
      fontWeight: "bold",
    },
    subtitle: {
      fontWeight: "bold",
    },
    timestamp: {
      marginBottom: 24,
    },
  });

  switch (evolution.type) {
    case "medico":
      title = "Evolução Médica";
      break;

    case "enfermagem":
      title = "Evolução da Enfermagem";
      break;

    case "fisioterapia":
      title = "Evolução da Fisioterapia";
      break;

    default:
      title = "";
      break;
  }

  return (
    <div className={classes.root}>
      <div>
        <Text variant="large" className={classes.title}>
          {title}
        </Text>
      </div>
      <div>
        <Text variant="mediumPlus" className={classes.subtitle}>
          {evolution.author}
        </Text>
      </div>
      <div className={classes.timestamp}>
        <Text variant="medium">
          <Moment
            locale="pt-br"
            date={evolution.createdAt}
            format="DD/MM/YYYY [às] HH:mm"
          />
        </Text>
      </div>
    </div>
  );
};
