import React, { FC } from "react";
import { mergeStyleSets, Text } from "@fluentui/react";
import { IEvolution } from "../../../types/models/evolution.interface";

import "moment/locale/pt-br";
import "moment-timezone";

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
        <Text variant="mediumPlus" className={classes.title}>
          {title}
        </Text>
      </div>
      <div>
        <Text variant="mediumPlus" className={classes.subtitle}>
          {evolution.author}
        </Text>
      </div>
    </div>
  );
};
