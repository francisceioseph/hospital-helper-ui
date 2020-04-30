import React, { FC } from "react";
import {
  Stack,
  StackItem,
  TooltipHost,
  CommandButton,
  Text,
  CommandBar,
  IStackItemStyles,
  ICommandBarItemProps,
  IContextualMenuItem,
} from "@fluentui/react";
import { internshipRoute } from "../../pages/beds/InternshipPage";
import { useHistory } from "react-router";
import { IInternship } from "../../../types/models/internship.interface";

interface IEvolutionTitleProps {
  internship?: IInternship;
  addEvolutionClick: (
    ev?:
      | React.MouseEvent<HTMLElement, MouseEvent>
      | React.KeyboardEvent<HTMLElement>
      | undefined,
    item?: IContextualMenuItem | undefined
  ) => boolean;
}

const titleStyles: IStackItemStyles = {
  root: {
    padding: "0 1rem 1rem 1rem",
    height: "8vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
};

export const EvolutionTitle: FC<IEvolutionTitleProps> = ({
  internship,
  addEvolutionClick,
}) => {
  const history = useHistory();

  const commandItems: ICommandBarItemProps[] = [
    {
      key: "add-evolution",
      text: "Nova Evolução",
      iconProps: { iconName: "Add" },
      onClick: addEvolutionClick,
    },
  ];

  return (
    <Stack horizontal>
      <StackItem styles={titleStyles}>
        <TooltipHost content="Voltar">
          <CommandButton
            iconProps={{ iconName: "Back" }}
            onClick={(ev) => {
              ev.stopPropagation();
              history.push(internshipRoute);
            }}
          />
        </TooltipHost>
      </StackItem>
      <StackItem styles={titleStyles}>
        <Text variant="large">Evolução de {internship?.Pacient?.fullName}</Text>
      </StackItem>
      <StackItem grow>
        <div></div>
      </StackItem>
      <StackItem styles={titleStyles}>
        <CommandBar items={commandItems} />
      </StackItem>
    </Stack>
  );
};
