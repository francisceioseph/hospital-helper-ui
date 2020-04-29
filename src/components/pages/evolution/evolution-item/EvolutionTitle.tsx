import React, { FC } from "react";
import { mergeStyleSets, Stack, StackItem } from "@fluentui/react";
import { IEvolution } from "../../../../types/models/evolution.interface";

import Moment from "react-moment";
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

    date: {
      backgroundColor: "blue",
      color: "white",
      border: "1px solid blue",
      borderRadius: 4,
      padding: 2,
      marginLeft: 8,
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
        <span className={classes.title}>{title}</span>
        <span className={classes.date}>
          <Moment format="DD/MM/YYYY" date={evolution.createdAt} />
        </span>
      </div>
      <div>
        <span className={classes.subtitle}>{evolution.author}</span>
      </div>
    </div>
  );
};
