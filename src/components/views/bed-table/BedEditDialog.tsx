import React, { FC, useState } from "react";
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
  bed: IBed;
  showDialog: boolean;
  onSaveClick: (value: string) => void;
  onCancelClick: () => void;
}

export const BedEditDialog: FC<IBedEditDialog> = ({
  showDialog,
  bed,
  onSaveClick,
  onCancelClick,
}) => {
  const [value, setValue] = useState(bed.name);

  return (
    <Dialog
      hidden={!showDialog}
      dialogContentProps={{
        type: DialogType.normal,
        title: "Editar Leito",
        subText: "Insira o novo nome desse leito",
        showCloseButton: false,
      }}
      modalProps={{
        isBlocking: true,
      }}
    >
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          onSaveClick(value);
        }}
      >
        <TextField
          value={value}
          onChange={(ev: any, v?: string) => {
            setValue(v?.toUpperCase() || "");
          }}
          required
        />

        <DialogFooter>
          <PrimaryButton type="submit" text="Salvar" disabled={!value.length} />
          <DefaultButton
            onClick={() => {
              onCancelClick();
              setValue(bed.name);
            }}
            text="Cancelar"
          />
        </DialogFooter>
      </form>
    </Dialog>
  );
};
