import React, { FC, useState, useEffect } from "react";
import {
  Dialog,
  DialogType,
  DialogFooter,
  PrimaryButton,
  DefaultButton,
  TextField,
} from "@fluentui/react";
import { IBed } from "../../../types/models/bed.interface";

interface IBedEditDialog {
  bed?: IBed;
  showDialog: boolean;
  onSaveClick: (bedName?: string, bedSector?: string) => void;
  onCancelClick: () => void;
}

export const BedEditDialog: FC<IBedEditDialog> = ({
  showDialog,
  bed,
  onSaveClick,
  onCancelClick,
}) => {
  const [bedName, setBedName] = useState<string>();
  const [bedSector, setBedSector] = useState<string>();

  useEffect(() => {
    setBedName(bed?.name);
    setBedSector(bed?.sector);
  }, [bed]);

  const handleSubmitForm = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    onSaveClick(bedName, bedSector);
  };

  const handleOnNameChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string
  ) => {
    event.preventDefault();
    setBedName(newValue?.toUpperCase());
  };

  const handleOnSectorChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string
  ) => {
    event.preventDefault();
    setBedSector(newValue?.toUpperCase());
  };

  return (
    <Dialog
      hidden={!showDialog}
      dialogContentProps={{
        type: DialogType.normal,
        title: "Editar Leito",
        showCloseButton: false,
      }}
      modalProps={{
        isBlocking: true,
      }}
    >
      <form onSubmit={handleSubmitForm}>
        <TextField
          label="Nome so setor"
          value={bedSector}
          onChange={handleOnSectorChange}
          required
        />
        <TextField
          label="Nome do Leito"
          value={bedName}
          onChange={handleOnNameChange}
          required
        />
        <DialogFooter>
          <PrimaryButton
            type="submit"
            text="Salvar"
            disabled={!bedName?.length || !bedSector?.length}
          />
          <DefaultButton
            onClick={() => {
              onCancelClick();
              setBedName(bed?.name);
              setBedSector(bed?.sector);
            }}
            text="Cancelar"
          />
        </DialogFooter>
      </form>
    </Dialog>
  );
};
