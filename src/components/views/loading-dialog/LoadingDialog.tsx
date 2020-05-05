import React, { FC } from "react";
import { Dialog, DialogType, ProgressIndicator } from "@fluentui/react";

interface ILoadingDialog {
  showDialog: boolean;
}

export const LoadingDialog: FC<ILoadingDialog> = ({ showDialog }) => {
  return (
    <Dialog
      hidden={!showDialog}
      dialogContentProps={{
        type: DialogType.normal,
        title: "Aguarde",
        subText: "Processando requisição",
        showCloseButton: false,
      }}
      modalProps={{
        isBlocking: true,
      }}
    >
      <ProgressIndicator />
    </Dialog>
  );
};
