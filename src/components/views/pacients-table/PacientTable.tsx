import React, { FC, useState, useEffect, useCallback } from "react";
import {
  DetailsList,
  SelectionMode,
  DetailsListLayoutMode,
  IColumn,
  Stack,
  StackItem,
  Text,
} from "@fluentui/react";
import { IPacient } from "../../../types/models/pacient.interface";
import { PacientTableHeader } from "./PacientTableHeader";
import Moment from "react-moment";
import { PacientService } from "../../../service/pacient.service";
import { TableItem } from "./PacientTableItem";

interface IPacientTableState {
  items: IPacient[];
  columns: IColumn[];
}

export const PacientTable: FC = () => {
  const [pacients, setPacients] = useState<IPacient[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const showNewButton = useCallback((): boolean => {
    const searchActive = !!searchTerm && searchTerm.length > 0;
    const hasPacients = pacients.length === 0;

    return searchActive && hasPacients;
  }, [pacients, searchTerm]);

  useEffect(() => {
    const pacientService = new PacientService();
    const searchPacients = async () => {
      try {
        const { data: pacients } = await pacientService.searchPacient(
          searchTerm!
        );
        setPacients(pacients || []);
      } catch (error) {
        console.log(error);
      }
    };

    if (!searchTerm || !searchTerm.length) {
      setPacients([]);
    } else {
      searchPacients();
    }
  }, [searchTerm]);

  const columns: IColumn[] = [
    {
      key: "column-01",
      name: "Name",
      fieldName: "fullName",
      minWidth: 210,
      maxWidth: 280,
      isRowHeader: true,
      isResizable: true,
      data: "string",
      isPadded: true,

      onRender: (item: IPacient) => <TableItem item={item} />,
    },
    {
      key: "column-02",
      name: "Nome da Mãe",
      fieldName: "motherName",
      minWidth: 210,
      maxWidth: 210,
      isRowHeader: true,
      isResizable: true,
    },
    {
      key: "column-03",
      name: "Data Nascimento",
      fieldName: "birthDate",
      minWidth: 100,
      maxWidth: 100,
      isRowHeader: true,
      isResizable: true,
      isPadded: true,
      onRender: (item: IPacient) => {
        return <Moment date={item.birthDate} format="DD/MM/YYYY" />;
      },
    },
    {
      key: "column-04",
      name: "Prontuário Nº",
      fieldName: "prontuario",
      minWidth: 150,
      maxWidth: 150,
      isRowHeader: true,
      isResizable: true,
      isPadded: true,
    },
  ];

  return (
    <Stack verticalFill>
      <StackItem>
        <PacientTableHeader
          showNewButton={showNewButton()}
          onSearchItemClick={(event: any, value?: string) => {
            setSearchTerm(value!);
          }}
        />
        {pacients.length <= 0 && searchTerm.length > 0 && (
          <Stack verticalFill verticalAlign="center" horizontalAlign="center">
            <StackItem>
              <Text variant="large">Nenhum paciente encontrado</Text>
            </StackItem>
          </Stack>
        )}
        {pacients.length > 0 && (
          <DetailsList
            items={pacients}
            columns={columns}
            getKey={(item: IColumn): string => item.key}
            selectionMode={SelectionMode.none}
            layoutMode={DetailsListLayoutMode.justified}
          />
        )}
      </StackItem>
    </Stack>
  );
};
