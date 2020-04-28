import React, { FC } from "react";
import {
  DetailsList,
  SelectionMode,
  DetailsListLayoutMode,
} from "@fluentui/react";

export const PacientTable: FC = () => {
  const getKey = (item: any, index?: number): string => {
    return item.key;
  };

  return (
    <DetailsList
      items={[]}
      columns={[]}
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
