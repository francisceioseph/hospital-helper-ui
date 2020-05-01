import React, { FC } from "react";
import { useHistory } from "react-router";
import {
  Stack,
  StackItem,
  TooltipHost,
  CommandButton,
  Text,
  IStackTokens,
  IStackStyles,
} from "@fluentui/react";

const headerStyles: IStackStyles = {
  root: {
    margin: "16px 2% 16px 2%",
  },
};

const headerTokens: IStackTokens = {
  childrenGap: 15,
};

export const PacientDetailsHeader: FC = () => {
  const history = useHistory();

  return (
    <Stack
      horizontal
      horizontalAlign="space-between"
      verticalAlign="center"
      tokens={headerTokens}
      styles={headerStyles}
    >
      <StackItem>
        <TooltipHost content="Voltar">
          <CommandButton
            iconProps={{ iconName: "Back" }}
            onClick={(ev) => {
              ev.stopPropagation();
              history.goBack();
            }}
          />
        </TooltipHost>
      </StackItem>
      <StackItem>
        <Text variant="large">Detalhes de Paciente</Text>
      </StackItem>
      <StackItem grow>
        <div></div>
      </StackItem>
    </Stack>
  );
};
