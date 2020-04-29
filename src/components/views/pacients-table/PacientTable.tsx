import React, { FC } from "react";
import {
  DetailsList,
  SelectionMode,
  DetailsListLayoutMode,
  IColumn,
} from "@fluentui/react";
import { IPacient } from "../../../types/models/pacient.interface";

interface IPacientTable {
  pacients: IPacient[];
}

export const PacientTable: FC<IPacientTable> = ({ pacients }) => {
  const getKey = (item: any, index?: number): string => {
    return item.key;
  };

  const onColumnClick = (
    ev: React.MouseEvent<HTMLElement>,
    column: IColumn
  ) => {};

  const columns: IColumn[] = [
    {
      key: "column-01",
      name: "Name",
      fieldName: "fullName",
      minWidth: 210,
      maxWidth: 350,
      isRowHeader: true,
      isResizable: true,
      isSorted: true,
      isSortedDescending: false,
      sortAscendingAriaLabel: "Sorted A to Z",
      sortDescendingAriaLabel: "Sorted Z to A",
      onColumnClick: onColumnClick,
      data: "string",
      isPadded: true,
    },
    {
      key: "column-02",
      name: "Nome da Mãe",
      fieldName: "motherName",
      minWidth: 210,
      maxWidth: 350,
      isRowHeader: true,
      isResizable: true,
    },
    {
      key: "column-03",
      name: "Data Nascimento",
      fieldName: "birthDate",
      minWidth: 210,
      maxWidth: 350,
      isRowHeader: true,
      isResizable: true,
      isPadded: true,
    },
    {
      key: "column-04",
      name: "Prontuário Nº",
      fieldName: "prontuario",
      minWidth: 180,
      maxWidth: 200,
      isRowHeader: true,
      isResizable: true,
      isPadded: true,
    },
  ];

  return (
    <DetailsList
      items={pacients}
      columns={columns}
      getKey={getKey}
      setKey="none"
      selectionMode={SelectionMode.none}
      layoutMode={DetailsListLayoutMode.justified}
      compact
      isHeaderVisible
      //   onItemInvoked={this._onItemInvoked}
    />
  );
};
