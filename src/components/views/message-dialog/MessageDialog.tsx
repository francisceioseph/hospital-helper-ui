import React, { FC } from "react";
import {
  Dialog,
  DialogType,
  DialogFooter,
  PrimaryButton,
} from "@fluentui/react";

interface IMessageDialogProps {
  title?: string;
  message: string;
  showDialog: boolean;
  onOkClick: (event?: any) => void;
}

export const MessageDialog: FC<IMessageDialogProps> = ({
  title,
  message,
  showDialog,
  onOkClick,
}) => {
  return (
    <Dialog
      hidden={!showDialog}
      dialogContentProps={{
        type: DialogType.normal,
        title: title || "Aviso",
        subText: message,
        showCloseButton: false,
      }}
      modalProps={{
        isBlocking: true,
      }}
    >
      <DialogFooter>
        <PrimaryButton onClick={onOkClick} text="Ok" />
      </DialogFooter>
    </Dialog>
  );
};
