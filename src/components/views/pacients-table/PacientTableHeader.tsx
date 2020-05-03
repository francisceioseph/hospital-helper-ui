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
  onSearchItemClick: (
    event: React.MouseEvent<anys>,
    value?: string | undefined
  ) => void;
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
        />
      </StackItem>
      <StackItem styles={{ root: { marginRight: 16, marginBottom: 8 } }}>
        <PrimaryButton
          onClick={(ev) => {
            onSearchItemClick(ev, searchTerm);
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
