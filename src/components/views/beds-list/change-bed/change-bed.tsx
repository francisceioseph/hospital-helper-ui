import React, { FC, useState, useEffect } from "react";
import { IInternship } from "../../../../types/models/internship.interface";
import {
  Dialog,
  DialogType,
  PrimaryButton,
  DefaultButton,
  DialogFooter,
  Dropdown,
  IDropdownOption,
} from "@fluentui/react";
import { BedService } from "../../../../service/bed.service";
import { IIPCResponse } from "../../../../types/ipc.response.interface";

interface IChangeBedDialog {
  internship: IInternship;
  hidden: boolean;
  onSaveClick: (bedId: number) => void;
  onCancelClick: (event?: any) => void;
}

export const ChangeBedDialog: FC<IChangeBedDialog> = ({
  hidden,
  internship,
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
      const options = beds.map<IDropdownOption>((bed) => ({
        key: bed.id,
        text: `${bed.sector} - ${bed.name}`,
      }));

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
        subText: `Deseja mudar o leito de ${internship.Pacient?.fullName}?`,
      }}
      modalProps={{
        isBlocking: true,
      }}
    >
      <Dropdown
        label="Escolha novo leito"
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
