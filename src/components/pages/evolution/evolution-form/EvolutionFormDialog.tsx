import React, { FC } from "react";
import {
  Modal,
  FontWeights,
  IButtonStyles,
  IconButton,
  Text,
  Stack,
  StackItem,
  IStackStyles,
  ITextStyles,
} from "@fluentui/react";
import { EvolutionForm } from "./EvolutionForm";
import { IInternship } from "../../../../types/models/internship.interface";

interface IEvolutionFormDialog {
  showDialog: boolean;
  internship: IInternship;
  onCloseCallback: () => void;
}

const stackHeaderStyles: IStackStyles = {
  root: { padding: "8px 16px 8px 16px" },
};

const titleTextStyles: ITextStyles = {
  root: {
    fontWeight: FontWeights.bold,
  },
};

const iconButtonStyles: IButtonStyles = {
  root: {
    marginLeft: "auto",
    marginTop: "4px",
    marginRight: "2px",
  },
};

export const EvolutionFormDialog: FC<IEvolutionFormDialog> = ({
  internship,
  showDialog,
  onCloseCallback,
}) => {
  const onSubmitClickHandler = () => {
    onCloseCallback();
  };

  const onCancelClickHandler = (ev: React.MouseEvent<HTMLDivElement>) => {
    ev.stopPropagation();
    onCloseCallback();
  };

  return (
    <Modal isBlocking isOpen={showDialog}>
      <Stack
        horizontal
        grow
        horizontalAlign="space-between"
        verticalAlign="center"
        styles={stackHeaderStyles}
      >
        <StackItem>
          <Text variant="mediumPlus" styles={titleTextStyles}>
            Adicionar Evolução
          </Text>
        </StackItem>
        <StackItem>
          <IconButton
            styles={iconButtonStyles}
            iconProps={{ iconName: "Cancel" }}
            onClick={onCancelClickHandler}
          />
        </StackItem>
      </Stack>
      <EvolutionForm
        internship={internship}
        onCancelClick={onCancelClickHandler}
        onSubmitClick={onSubmitClickHandler}
      />
    </Modal>
  );
};
