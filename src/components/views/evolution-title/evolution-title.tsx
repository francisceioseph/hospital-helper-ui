import React, { FC } from "react";
import {
  Stack,
  StackItem,
  TooltipHost,
  CommandButton,
  Text,
  IStackStyles,
  IStackTokens,
  PrimaryButton,
  DefaultButton,
} from "@fluentui/react";
import { internshipRoute } from "../../pages/beds/InternshipPage";
import { useHistory } from "react-router";
import { IInternship } from "../../../types/models/internship.interface";

interface IEvolutionTitleProps {
  internship?: IInternship;
  addEvolutionClick: (ev: React.MouseEvent<HTMLButtonElement>) => boolean;
  printEvolutionClick: (ev: React.MouseEvent<HTMLButtonElement>) => boolean;
}

const headerStyles: IStackStyles = {
  root: {
    margin: "16px 2% 16px 2%",
  },
};

const headerTokens: IStackTokens = {
  childrenGap: 16,
};

export const EvolutionTitle: FC<IEvolutionTitleProps> = ({
  internship,
  addEvolutionClick,
  printEvolutionClick,
}) => {
  const history = useHistory();

  return (
    <Stack
      horizontal
      tokens={headerTokens}
      styles={headerStyles}
      verticalAlign="center"
    >
      <StackItem>
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
      <StackItem>
        <Text variant="large">Evolução de {internship?.Pacient?.fullName}</Text>
      </StackItem>
      <StackItem grow>
        <div></div>
      </StackItem>
      <StackItem>
        <PrimaryButton
          iconProps={{ iconName: "Add" }}
          onClick={addEvolutionClick}
        >
          Nova Evolução
        </PrimaryButton>
      </StackItem>
      <StackItem>
        <DefaultButton
          iconProps={{ iconName: "Print" }}
          onClick={printEvolutionClick}
        >
          Imprimir
        </DefaultButton>
      </StackItem>
    </Stack>
  );
};
