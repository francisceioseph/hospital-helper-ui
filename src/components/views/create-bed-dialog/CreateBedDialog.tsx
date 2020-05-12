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
  onSaveClick: (bedName: string, bedSector: string) => void;
  onCancelClick: (event?: any) => void;
}

export const CreateBedDialog: FC<ICreateBedDialog> = ({
  showDialog,
  onSaveClick,
  onCancelClick,
}) => {
  const [bedSector, setBedSector] = useState<string>("");
  const [bedName, setBedName] = useState<string>("");

  return (
    <Dialog
      hidden={!showDialog}
      dialogContentProps={{
        type: DialogType.normal,
        title: "Criar Leito",
        showCloseButton: false,
      }}
      modalProps={{
        isBlocking: true,
      }}
    >
      <TextField
        label="Setor do leito"
        value={bedSector}
        onChange={(_, value) => setBedSector(value!.toUpperCase())}
      />
      <TextField
        label="Nome do leito"
        value={bedName}
        onChange={(_, value) => setBedName(value!.toUpperCase())}
      />
      <DialogFooter>
        <PrimaryButton
          onClick={() => {
            onSaveClick(bedName, bedSector);
            setBedName("");
            setBedSector("");
          }}
          text="Salvar"
          disabled={!bedName.length || !bedSector.length}
        />
        <DefaultButton
          onClick={() => {
            onCancelClick();
            setBedName("");
            setBedSector("");
          }}
          text="Cancelar"
        />
      </DialogFooter>
    </Dialog>
  );
};
