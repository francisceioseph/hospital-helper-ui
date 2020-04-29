import React, { Component } from "react";
import {
  DetailsList,
  SelectionMode,
  DetailsListLayoutMode,
  IColumn,
} from "@fluentui/react";
import { IPacient } from "../../../types/models/pacient.interface";

interface IPacientTableProps {
  pacients: IPacient[];
}

interface IPacientTableState {
  items: IPacient[];
  columns: IColumn[];
}

export class PacientTable extends Component<
  IPacientTableProps,
  IPacientTableState
> {
  constructor(props: any) {
    super(props);

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
        isSortedDescending: true,
        sortAscendingAriaLabel: "Sorted A to Z",
        sortDescendingAriaLabel: "Sorted Z to A",
        onColumnClick: this.onColumnClick,
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

    const state: IPacientTableState = {
      items: [],
      columns: columns,
    };

    this.state = state;
  }

  componentWillReceiveProps(nextProps: IPacientTableProps) {
    if (nextProps.pacients.length !== this.props.pacients.length) {
      this.setState({ items: copyAndSort(nextProps.pacients, true) });
    }
  }

  render() {
    return (
      <DetailsList
        items={this.state.items}
        columns={this.state.columns}
        getKey={this.getKey}
        setKey="none"
        selectionMode={SelectionMode.none}
        layoutMode={DetailsListLayoutMode.justified}
        compact
        isHeaderVisible
        //   onItemInvoked={this._onItemInvoked}
      />
    );
  }

  onColumnClick = (ev: React.MouseEvent<HTMLElement>, column: IColumn) => {
    const { columns, items } = this.state;
    const newColumns: IColumn[] = columns.slice();
    const currColumn: IColumn = newColumns.filter(
      (currCol) => column.key === currCol.key
    )[0];

    newColumns.forEach((newCol: IColumn) => {
      if (newCol === currColumn) {
        currColumn.isSortedDescending = !currColumn.isSortedDescending;
        currColumn.isSorted = true;
      } else {
        newCol.isSorted = false;
        newCol.isSortedDescending = true;
      }
    });

    const newItems = copyAndSort(items, currColumn.isSortedDescending);

    this.setState({
      columns: newColumns,
      items: newItems,
    });
  };

  getKey = (item: any): string => {
    return item.key;
  };
}

function copyAndSort(
  items: IPacient[],
  isSortedDescending?: boolean
): IPacient[] {
  return items.slice(0).sort((a: IPacient, b: IPacient) => {
    const bName = b.fullName.toLowerCase();
    const aName = a.fullName.toLowerCase();

    if (isSortedDescending) {
      return aName > bName ? 1 : aName < bName ? -1 : 0;
    }

    return bName > aName ? 1 : bName < aName ? -1 : 0;
  });
}
