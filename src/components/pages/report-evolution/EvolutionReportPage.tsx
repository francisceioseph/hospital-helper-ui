import React, { FC, useState } from "react";
import {
  Stack,
  StackItem,
  PrimaryButton,
  IStackTokens,
  IStackStyles,
  Text,
  IStackItemStyles,
} from "@fluentui/react";
import { EvolutionReportHeader } from "../../views/evolution-report-header/EvolutionReportHeader";
import { PtDatePicker } from "../../views/date-picker/date-picker";
import { IpcService } from "../../../service/ipc.service";
import Constants from "../../../constants/ipc-constants";
export const evolutionReportRoute = "/auth/reports/evolution";

const stackTokens: IStackTokens = {
  childrenGap: 15,
};

const containerStyles: IStackStyles | IStackItemStyles = {
  root: {
    padding: "0 2% 0 2%",
  },
};

export const EvolutionReportPage: FC = () => {
  const ipcService = new IpcService();
  const [selectedDate, setSelectedDate] = useState<Date>();

  const generatePDFClickHandler = () => {
    ipcService
      .send(
        Constants.PDF.REPORT_EVOLUTIONS,
        Constants.PDF.PRINT_EVOLUTIONS_RESPONSE,
        { dateStr: selectedDate?.toISOString() }
      )
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Stack grow verticalFill tokens={stackTokens}>
      <StackItem>
        <EvolutionReportHeader />
      </StackItem>
      <StackItem styles={containerStyles}>
        <Text variant="medium">
          Gera um relatório contendo as evoluções de todos os pacientes
          internados em um determinado data.
        </Text>
      </StackItem>
      <StackItem>
        <Stack horizontal tokens={stackTokens} styles={containerStyles}>
          <PtDatePicker
            onSelectDate={(date) => setSelectedDate(date!)}
            value={selectedDate}
          />
          <PrimaryButton
            text="Gerar Relatório"
            disabled={!selectedDate}
            onClick={generatePDFClickHandler}
          />
        </Stack>
      </StackItem>
    </Stack>
  );
};
