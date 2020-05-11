import React, { FC, useState, useEffect, useCallback } from "react";
import * as _ from "lodash";
import { Stack, StackItem, IStackStyles } from "@fluentui/react";
import { BedTable } from "../../views/bed-table/BedTable";
import { CreateBedHeader } from "../../views/create-bed-header/CreateBedHeader";
import { CreateBedDialog } from "../../views/create-bed-dialog/CreateBedDialog";
import { IBed } from "../../../types/models/bed.interface";
import { BedService } from "../../../service/bed.service";
import { useSelector, useDispatch } from "react-redux";
import { IAppState } from "../../../types/state/app-state.interface";
import {
  loadBedsSuccessAction,
  loadBedsFailureAction,
  reloadAction,
  loadBedsAction,
} from "../../../redux/actions/bed.actions";

export const createBedRoute = "/auth/beds/create";

const stackStyles: IStackStyles = {
  root: {
    padding: "2% 2% 0 2%",
  },
};

const bedService: BedService = new BedService();

export const CreateBedPage: FC = () => {
  const dispatch = useDispatch();
  const { beds, reload } = useSelector((state: IAppState) => state.beds);

  const reloadMemo = useCallback(() => reload === true, [reload]);
  const [showNewBedDialog, setShowNewBedDialog] = useState(false);

  useEffect(() => {
    dispatch(loadBedsAction());

    const getBeds = async () => {
      try {
        const { data } = await bedService.listBeds();
        const beds = data ? data : [];

        dispatch(loadBedsSuccessAction(beds));
      } catch (error) {
        dispatch(loadBedsFailureAction(error));
        console.log(error);
      }
    };

    getBeds();
  }, [reloadMemo, dispatch]);

  const handleCreateBedClick = () => {
    setShowNewBedDialog(true);
  };

  const handleSaveBedClick = async (bedName: string) => {
    try {
      await bedService.createBed({ name: bedName });
      dispatch(reloadAction(true));
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
