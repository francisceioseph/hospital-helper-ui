import React, { FC } from "react";
import {
  Stack,
  StackItem,
  TextField,
  PrimaryButton,
  IStackItemStyles,
} from "@fluentui/react";
import { useHistory } from "react-router";
import { addPacientRoute } from "../../pages/pacient/AddPacientPage";

interface IPacientTableHeader {
  onSearchItemChange: (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    value?: string | undefined
  ) => void;
}

const searchFieldStyles: IStackItemStyles = {
  root: {
    margin: 8,
    width: "33%",
  },
};

const searchConatinerTokens: IStackTokens = {
  childrenGap: 15,
};

export const PacientTableHeader: FC<IPacientTableHeader> = ({
  onSearchItemChange,
}) => {
  const history = useHistory();

  const handleNewPacientClick = () => {
    history.push(addPacientRoute);
  };

  return (
    <Stack horizontal verticalAlign="end" tokens={searchConatinerTokens}>
      <StackItem styles={searchFieldStyles}>
        <TextField label="Pesquisar pelo nome" onChange={onSearchItemChange} />
      </StackItem>
      <StackItem grow>
        <div></div>
      </StackItem>
      <StackItem styles={{ root: { marginRight: 16 } }}>
        <PrimaryButton onClick={handleNewPacientClick}>
          Cadastrar Paciente
        </PrimaryButton>
      </StackItem>
    </Stack>
  );
};
