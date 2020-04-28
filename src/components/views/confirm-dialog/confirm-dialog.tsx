import React, { FC } from "react";
import {
  Dialog,
  DialogType,
  DialogFooter,
  PrimaryButton,
  DefaultButton,
} from "@fluentui/react";

interface IConfirmDialogProps {
  showDialog: boolean;
  onCancelClick: (event?: any) => void;
  onOkClick: (event?: any) => void;
}

export const ConfirmDialog: FC<IConfirmDialogProps> = ({
  showDialog,
  onOkClick: onSaveClick,
  onCancelClick,
}) => {
  return (
    <Dialog
      hidden={!showDialog}
      dialogContentProps={{
        type: DialogType.normal,
        title: "Confirmar",
        subText: "Você está certo disso?",
      }}
      modalProps={{
        isBlocking: true,
      }}
    >
      <DialogFooter>
        <PrimaryButton onClick={onSaveClick} text="Sim" />
        <DefaultButton onClick={onCancelClick} text="Não" />
      </DialogFooter>
    </Dialog>
  );
};
