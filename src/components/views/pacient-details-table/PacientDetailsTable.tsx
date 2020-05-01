import React, { FC } from "react";
import {
  DetailsList,
  DetailsListLayoutMode,
  IColumn,
  SelectionMode,
  Text,
} from "@fluentui/react";
import { IPacient } from "../../../types/models/pacient.interface";
import Moment from "react-moment";
import {
  Card,
  ICardTokens,
  ICardStyles,
  CardItem,
} from "@uifabric/react-cards";

interface IPacientDetailsTable {
  pacient?: IPacient;
}

const cardStyles: ICardStyles = {
  root: {
    marginRight: "2%",
    marginLeft: "2%",
  },
};

const cardTokens: ICardTokens = {
  minWidth: "96%",
  childrenGap: 8,
  padding: 16,
};

export const PacientDetailsTable: FC<IPacientDetailsTable> = ({ pacient }) => {
  console.log(pacient);
  const columns: IColumn[] = [
    {
      key: "column1",
      name: "Início Internamento",
      fieldName: "startDate",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
      onRender: (record) => {
        return <Moment date={record.startDate} format="DD/MM/YYYY" />;
      },
    },
    {
      key: "column2",
      name: "Final Internamento",
      fieldName: "endDate",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
      onRender: (record) => {
        if (record.endDate) {
          return <Moment date={record.endDate} format="DD/MM/YYYY" />;
        }

        return <Text>Paciente em internamento</Text>;
      },
    },
  ];
  return (
    <Card styles={cardStyles} tokens={cardTokens}>
      <CardItem>
        <DetailsList
          compact
          isHeaderVisible
          items={pacient?.Internships || []}
          columns={columns}
          layoutMode={DetailsListLayoutMode.justified}
          selectionMode={SelectionMode.none}
          getKey={(item: any): string => item.key}
        />
      </CardItem>
    </Card>
  );
};
