import React, { FC } from "react";
import { PacientTable } from "../../views/pacients-table/PacientTable";
import {
  Stack,
  StackItem,
  IStackItemStyles,
  Text,
  IStackStyles,
} from "@fluentui/react";

export const pacientListRouteName = "/auth/pacients";

const titleStyles: IStackItemStyles = {
  root: {
    padding: "2vh 1rem 2vh 1rem",
    height: "8vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
};

const stackStyles: IStackStyles = {
  root: {
    width: "100%",
  },
};

export const PacientPageList: FC = () => {
  return (
    <Stack verticalFill styles={stackStyles}>
      <StackItem styles={titleStyles}>
        <Text variant="large">Buscar Pacientes</Text>
      </StackItem>
      <StackItem>
        <PacientTable />
      </StackItem>
    </Stack>
  );
};
