import React, { FC } from "react";
import moment from "moment";
import "moment/locale/pt-br";
import "moment-timezone";

import { StackItem, List, Separator, mergeStyleSets } from "@fluentui/react";
import { IInternship } from "../../../types/models/internship.interface";
import { EvolutionItem } from "../evolution-item/EvolutionItem";
import { IEvolution } from "../../../types/models/evolution.interface";
import Moment from "react-moment";

interface IEvolutionListProps {
  internship?: IInternship;
}

const classes = mergeStyleSets({
  date: {
    background: "#FAFAFA",
    color: "#9E9E9E",
    border: "1px solid #9E9E9E",
    borderRadius: 4,
    padding: 2,
    marginLeft: 8,
    fontWeight: "bold",
  },
});

export const EvolutionList: FC<IEvolutionListProps> = ({ internship }) => {
  const onRenderCell = (
    item?: IEvolution,
    index?: number | undefined
  ): JSX.Element => {
    if (index! > 0) {
      const previous = internship!.Evolution![index! - 1];
      const diff = moment(previous.createdAt).diff(
        moment(item!.createdAt),
        "days"
      );

      if (diff > 0) {
        return (
          <div>
            <Separator alignContent="center">
              <span className={classes.date}>
                <Moment format="DD/MM/YYYY" date={item!.createdAt} />
              </span>
            </Separator>
            <EvolutionItem evolution={item!}></EvolutionItem>
          </div>
        );
      }
    }

    return (
      <div>
        <EvolutionItem evolution={item!}></EvolutionItem>
      </div>
    );
  };

  return (
    <StackItem
      grow
      styles={{
        root: {
          marginLeft: 16,
          height: "89vh",
          overflowY: "scroll",
        },
      }}
    >
      <List items={internship?.Evolution!} onRenderCell={onRenderCell} />
    </StackItem>
  );
};
