import React, { FC } from "react";
import {
  Modal,
  FontWeights,
  Text,
  Stack,
  StackItem,
  IStackStyles,
  ITextStyles,
} from "@fluentui/react";
import { EvolutionForm } from "./EvolutionForm";
import { IInternship } from "../../../types/models/internship.interface";
import { IEvolution } from "../../../types/models/evolution.interface";

interface IEvolutionFormDialog {
  showDialog: boolean;
  internship: IInternship;
  evolution?: IEvolution;
  onCloseCallback: (reload?: boolean) => void;
}

const stackHeaderStyles: IStackStyles = {
  root: { padding: "8px 16px 8px 16px" },
};

const titleTextStyles: ITextStyles = {
  root: {
    marginTop: 4,
    fontWeight: FontWeights.bold,
  },
};

export const EvolutionFormDialog: FC<IEvolutionFormDialog> = ({
  evolution,
  internship,
  showDialog,
  onCloseCallback,
}) => {
  const onSubmitClickHandler = () => {
    onCloseCallback(true);
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
      </Stack>
      <EvolutionForm
        evolution={evolution}
        internship={internship}
        onCancelClick={onCancelClickHandler}
        onSubmitClick={onSubmitClickHandler}
      />
    </Modal>
  );
};
