import React, { FC } from "react";
import {
  StackItem,
  FocusZone,
  List,
  FocusZoneDirection,
} from "@fluentui/react";
import { IInternship } from "../../../../types/models/internship.interface";
import { EvolutionItem } from "../evolution-item/EvolutionItem";
import { IEvolution } from "../../../../types/models/evolution.interface";

interface IEvolutionListProps {
  internship?: IInternship;
}

export const EvolutionList: FC<IEvolutionListProps> = ({ internship }) => {
  const onRenderCell = (
    item?: IEvolution,
    index?: number | undefined
  ): JSX.Element => {
    return <EvolutionItem evolution={item!}></EvolutionItem>;
  };

  return (
    <StackItem
      styles={{
        root: { marginLeft: 16, height: "75vh", overflowY: "scroll" },
      }}
    >
      <FocusZone direction={FocusZoneDirection.vertical}>
        <List items={internship?.Evolution!} onRenderCell={onRenderCell} />
      </FocusZone>
    </StackItem>
  );
};
