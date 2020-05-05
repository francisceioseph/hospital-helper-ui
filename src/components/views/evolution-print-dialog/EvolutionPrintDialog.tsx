import React, { FC, useState } from "react";
import {
  Dialog,
  DialogType,
  IChoiceGroupOption,
  ChoiceGroup,
  DialogFooter,
  PrimaryButton,
  DefaultButton,
  Stack,
  StackItem,
} from "@fluentui/react";
import { PtDatePicker } from "../date-picker/date-picker";
import { IInternship } from "../../../types/models/internship.interface";

export interface ISaveOptions {
  selectedOption: string;
  startDate: Date;
  endDate: Date;
}

interface IEvolutionPrintDialog {
  internship: IInternship;
  showDialog: boolean;
  onSaveClick: (event?: any, values?: ISaveOptions) => void;
  onCancelClick: (event?: any) => void;
}

const options: IChoiceGroupOption[] = [
  { key: "today", text: "Imprimir apenas evoluções de hoje" },
  { key: "other-dates", text: "Outras datas" },
];

export const EvolutionPrintDialog: FC<IEvolutionPrintDialog> = ({
  internship,
  showDialog,
  onSaveClick,
  onCancelClick,
}) => {
  const today = new Date();
  const [selectedOption, setSelectedOption] = useState("today");
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);

  return (
    <Dialog
      hidden={!showDialog}
      dialogContentProps={{
        type: DialogType.normal,
        title: "Relatório de Evolução",
        subText: "Selecione o tipo de relatório",
      }}
      modalProps={{
        isBlocking: true,
      }}
    >
      <ChoiceGroup
        options={options}
        defaultSelectedKey={selectedOption!}
        onChange={(ev, option) => setSelectedOption(option!.key)}
      />

      {selectedOption! === "other-dates" && (
        <Stack tokens={{ childrenGap: 8 }}>
          <StackItem>
            <PtDatePicker
              value={startDate}
              minDate={internship.startDate}
              maxDate={today}
              onSelectDate={(date) => setStartDate(date!)}
              label="Data Inicial"
            />
          </StackItem>
          <StackItem>
            <PtDatePicker
              value={endDate}
              minDate={startDate}
              maxDate={today}
              onSelectDate={(date) => setEndDate(date!)}
              label="Data Final"
            />
          </StackItem>
        </Stack>
      )}

      <DialogFooter>
        <PrimaryButton
          onClick={(event) =>
            onSaveClick(event, { selectedOption, startDate, endDate })
          }
          text={selectedOption! === "today" ? "Gerar PDF" : "Concluir"}
        />
        <DefaultButton onClick={onCancelClick} text="Cancelar" />
      </DialogFooter>
    </Dialog>
  );
};
