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
  onSaveClick: (value?: string) => void;
  onCancelClick: () => void;
}

export const BedEditDialog: FC<IBedEditDialog> = ({
  showDialog,
  bed,
  onSaveClick,
  onCancelClick,
}) => {
  const [value, setValue] = useState<string>();

  useEffect(() => setValue(bed?.name), [bed]);

  const handleSubmitForm = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    onSaveClick(value);
  };

  const handleOnChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string
  ) => {
    event.preventDefault();
    setValue(newValue?.toUpperCase());
  };

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
      <form onSubmit={handleSubmitForm}>
        <TextField value={value} onChange={handleOnChange} required />
        <DialogFooter>
          <PrimaryButton
            type="submit"
            text="Salvar"
            disabled={!value?.length}
          />
          <DefaultButton
            onClick={() => {
              onCancelClick();
              setValue(bed?.name);
            }}
            text="Cancelar"
          />
        </DialogFooter>
      </form>
    </Dialog>
  );
};
