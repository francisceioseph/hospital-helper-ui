import React, { FC, useState } from "react";
import { Stack, StackItem, IStackStyles } from "@fluentui/react";
import { BedTable } from "../../views/bed-table/BedTable";
import { CreateBedHeader } from "../../views/create-bed-header/CreateBedHeader";
import { CreateBedDialog } from "../../views/create-bed-dialog/CreateBedDialog";

export const createBedRoute = "/auth/beds/create";

const stackStyles: IStackStyles = {
  root: {
    padding: "2% 2% 0 2%",
  },
};

export const CreateBedPage: FC = () => {
  const [showNewBedDialog, setShowNewBedDialog] = useState(false);

  const handleCreateBedClick = () => {
    setShowNewBedDialog(true);
  };

  const handleSaveBedClick = () => {};

  const handleCancelClick = () => {
    setShowNewBedDialog(false);
  };

  return (
    <Stack grow verticalFill styles={stackStyles}>
      <StackItem>
        <CreateBedHeader onCreateBedClick={handleCreateBedClick} />
      </StackItem>
      <StackItem>
        <BedTable />
      </StackItem>
      <CreateBedDialog
        showDialog={showNewBedDialog}
        onSaveClick={handleSaveBedClick}
        onCancelClick={handleCancelClick}
      />
    </Stack>
  );
};
