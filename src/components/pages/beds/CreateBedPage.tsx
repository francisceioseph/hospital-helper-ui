import React, { FC, useState, useEffect } from "react";
import * as _ from "lodash";
import { Stack, StackItem, IStackStyles } from "@fluentui/react";
import { BedTable } from "../../views/bed-table/BedTable";
import { CreateBedHeader } from "../../views/create-bed-header/CreateBedHeader";
import { CreateBedDialog } from "../../views/create-bed-dialog/CreateBedDialog";
import { IBed } from "../../../types/models/bed.interface";
import { BedService } from "../../../service/bed.service";

export const createBedRoute = "/auth/beds/create";

const stackStyles: IStackStyles = {
  root: {
    padding: "2% 2% 0 2%",
  },
};

const bedService: BedService = new BedService();

export const CreateBedPage: FC = () => {
  const [showNewBedDialog, setShowNewBedDialog] = useState(false);
  const [beds, setBeds] = useState<IBed[]>([]);

  useEffect(() => {
    const getBeds = async () => {
      try {
        const { data } = await bedService.listBeds();
        const beds = data ? data : [];

        setBeds(beds);
      } catch (error) {
        setBeds([]);
        console.log(error);
      }
    };

    getBeds();
  }, []);

  const handleCreateBedClick = () => {
    setShowNewBedDialog(true);
  };

  const handleSaveBedClick = async (bedName: string) => {
    try {
      const { data: bed } = await bedService.createBed({ name: bedName });

      if (bed) {
        setBeds(_.sortBy([...beds, bed], "name"));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setShowNewBedDialog(false);
    }
  };

  const handleCancelClick = () => {
    setShowNewBedDialog(false);
  };

  return (
    <Stack grow verticalFill styles={stackStyles}>
      <StackItem>
        <CreateBedHeader onCreateBedClick={handleCreateBedClick} />
      </StackItem>
      <StackItem>
        <BedTable beds={beds} />
      </StackItem>
      <CreateBedDialog
        showDialog={showNewBedDialog}
        onSaveClick={handleSaveBedClick}
        onCancelClick={handleCancelClick}
      />
    </Stack>
  );
};
