import React, { FC } from "react";
import { IStackItemStyles, Stack, StackItem, Text } from "@fluentui/react";

export const addPacientRoute = "/auth/pacients/add";

export const AddPacientPage: FC = () => {
  const titleStyles: IStackItemStyles = {
    root: {
      padding: "2vh 1rem 2vh 1rem",
      height: "8vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
    },
  };
  return (
    <Stack>
      <StackItem styles={titleStyles}>
        <Text variant="large">Cadastrar Paciente</Text>
      </StackItem>
      <StackItem></StackItem>
    </Stack>
  );
};
