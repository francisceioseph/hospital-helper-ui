import React, { FC } from "react";
import { IBed } from "../../../types/models/bed.interface";
import {
  Stack,
  StackItem,
  Text,
  DetailsList,
  IColumn,
  SelectionMode,
  DetailsListLayoutMode,
} from "@fluentui/react";

interface IBedTable {
  beds: IBed[];
}

export const BedTable: FC<IBedTable> = ({ beds }) => {
  const columns: IColumn[] = [
    {
      key: "column-01",
      name: "Nome do Leito",
      fieldName: "name",
      minWidth: 210,
      maxWidth: 210,
      isRowHeader: true,
      isResizable: true,
    },
    {
      key: "column-03",
      name: "Status",
      fieldName: "name",
      minWidth: 210,
      maxWidth: 210,
      isRowHeader: true,
      isResizable: true,
      onRender: (item: IBed) => {
        return item.Internships!.length > 0 ? (
          <Text>ocupado</Text>
        ) : (
          <div></div>
        );
      },
    },
  ];

  const renderEmptyMessage = (): JSX.Element => {
    return (
      <Stack verticalFill verticalAlign="center" horizontalAlign="center">
        <StackItem>
          <Text variant="large">Nenhum leito encontrado</Text>
        </StackItem>
      </Stack>
    );
  };

  const renderBedTable = (): JSX.Element => {
    return (
      <DetailsList
        items={beds}
        columns={columns}
        getKey={(item: IColumn): string => item.key}
        selectionMode={SelectionMode.none}
        layoutMode={DetailsListLayoutMode.justified}
      />
    );
  };

  return beds.length ? renderBedTable() : renderEmptyMessage();
};
