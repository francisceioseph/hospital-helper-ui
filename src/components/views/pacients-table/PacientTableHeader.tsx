import React, { FC, useState } from "react";
import {
  Stack,
  StackItem,
  TextField,
  PrimaryButton,
  IStackItemStyles,
  IStackTokens,
  DefaultButton,
} from "@fluentui/react";
import { useHistory } from "react-router";
import { addPacientRoute } from "../../pages/pacient/AddPacientPage";

interface IPacientTableHeader {
  onSearchItemClick: (value?: string | undefined) => void;
  showNewButton: boolean;
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
  showNewButton,
  onSearchItemClick,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  const handleSearchChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    value?: string | undefined
  ) => {
    setSearchTerm(value!);
  };

  const handleKeydown = (
    event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.keyCode === 13) {
      onSearchItemClick(searchTerm);
    }
  };

  const handleNewPacientClick = () => {
    history.push(addPacientRoute);
  };

  return (
    <Stack horizontal verticalAlign="end" tokens={searchConatinerTokens}>
      <StackItem styles={searchFieldStyles}>
        <TextField
          label="Pesquisar pelo nome"
          value={searchTerm}
          iconProps={{ iconName: "Search" }}
          onChange={handleSearchChange}
          onKeyDown={handleKeydown}
        />
      </StackItem>
      <StackItem styles={{ root: { marginRight: 16, marginBottom: 8 } }}>
        <PrimaryButton
          onClick={() => {
            onSearchItemClick(searchTerm);
          }}
        >
          Buscar
        </PrimaryButton>
      </StackItem>

      {showNewButton && (
        <StackItem styles={{ root: { marginRight: 16, marginBottom: 8 } }}>
          <DefaultButton onClick={handleNewPacientClick}>
            Cadastrar Paciente
          </DefaultButton>
        </StackItem>
      )}
    </Stack>
  );
};
