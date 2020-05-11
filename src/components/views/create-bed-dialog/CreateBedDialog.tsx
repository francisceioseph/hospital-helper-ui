import React, { FC, useState } from "react";
import {
  Dialog,
  DialogType,
  DialogFooter,
  PrimaryButton,
  DefaultButton,
  TextField,
} from "@fluentui/react";

interface ICreateBedDialog {
  showDialog: boolean;
  onSaveClick: (bedName: string) => void;
  onCancelClick: (event?: any) => void;
}

export const CreateBedDialog: FC<ICreateBedDialog> = ({
  showDialog,
  onSaveClick,
  onCancelClick,
}) => {
  const [bedName, setBedName] = useState<string>("");

  return (
    <Dialog
      hidden={!showDialog}
      dialogContentProps={{
        type: DialogType.normal,
        title: "Criar Leito",
        subText: "Insira um nome para este leito:",
        showCloseButton: false,
      }}
      modalProps={{
        isBlocking: true,
      }}
    >
      <TextField
        value={bedName}
        onChange={(_, value) => setBedName(value!.toUpperCase())}
      />
      <DialogFooter>
        <PrimaryButton
          onClick={() => {
            onSaveClick(bedName);
            setBedName("");
          }}
          text="Salvar"
          disabled={!bedName.length}
        />
        <DefaultButton
          onClick={() => {
            onCancelClick();
            setBedName("");
          }}
          text="Cancelar"
        />
      </DialogFooter>
    </Dialog>
  );
};
