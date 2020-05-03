import React, { FC, useState, useEffect } from "react";
import {
  Dialog,
  DialogType,
  PrimaryButton,
  DefaultButton,
  DialogFooter,
  Dropdown,
  IDropdownOption,
} from "@fluentui/react";
import { IBed } from "../../../types/models/bed.interface";
import { IPacient } from "../../../types/models/pacient.interface";
import { BedService } from "../../../service/bed.service";
import { IIPCResponse } from "../../../types/ipc.response.interface";

interface IPacientBedDialog {
  pacient: IPacient;
  hidden: boolean;
  onSaveClick: (bedId: number) => void;
  onCancelClick: (event?: any) => void;
}

export const PacientBedDialog: FC<IPacientBedDialog> = ({
  hidden,
  pacient,
  onSaveClick,
  onCancelClick,
}) => {
  const [newBedId, setNewBedId] = useState<string | number>(0);
  const [bedOptions, setBedOptions] = useState<IDropdownOption[]>([]);

  useEffect(() => {
    const bedService = new BedService();

    const getBeds = async () => {
      const response: IIPCResponse<any[]> = await bedService.listNotInUse();
      const beds = response.data || [];
      const options = beds.map(
        (bed: IBed): IDropdownOption => ({
          key: bed.id,
          text: bed.name,
        })
      );

      setBedOptions(options);
    };

    getBeds();
  }, [hidden]);

  const handleOnSaveClick = (_: any) => {
    onSaveClick(parseInt(newBedId.toString()));
  };

  const handleOnChange = (
    event: React.FormEvent<HTMLDivElement>,
    option?: IDropdownOption
  ) => {
    if (option) {
      setNewBedId(option.key);
    }
  };

  return (
    <Dialog
      hidden={hidden}
      dialogContentProps={{
        type: DialogType.normal,
        title: "Mudar de Leito",
        subText: `Escolha o leito de ${pacient.fullName}`,
      }}
      modalProps={{
        isBlocking: true,
      }}
      onDismiss={onCancelClick}
    >
      <Dropdown
        label="Escolha o leito"
        required
        options={bedOptions}
        onChange={handleOnChange}
      ></Dropdown>
      <DialogFooter>
        <PrimaryButton onClick={handleOnSaveClick} text="Salvar" />
        <DefaultButton onClick={onCancelClick} text="Cancelar" />
      </DialogFooter>
    </Dialog>
  );
};
