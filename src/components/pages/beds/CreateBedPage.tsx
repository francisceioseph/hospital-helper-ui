import React, { FC, useEffect, useCallback } from "react";
import { Stack, StackItem, IStackStyles } from "@fluentui/react";
import { BedTable } from "../../views/bed-table/BedTable";
import { CreateBedHeader } from "../../views/create-bed-header/CreateBedHeader";
import { CreateBedDialog } from "../../views/create-bed-dialog/CreateBedDialog";
import { BedService } from "../../../service/bed.service";
import { useSelector, useDispatch } from "react-redux";
import { IAppState } from "../../../types/state/app-state.interface";
import {
  loadBedsSuccessAction,
  loadBedsFailureAction,
  reloadAction,
  loadBedsAction,
  clearBedAction,
  showNewBedDialogAction,
} from "../../../redux/actions/bed.actions";
import { BedEditDialog } from "../../views/bed-table/BedEditDialog";

export const createBedRoute = "/auth/beds/create";

const stackStyles: IStackStyles = {
  root: {
    padding: "2% 2% 0 2%",
  },
};

const bedService: BedService = new BedService();

export const CreateBedPage: FC = () => {
  const dispatch = useDispatch();
  const { beds, bed, reload, showNewBedDialog } = useSelector(
    (state: IAppState) => state.beds
  );

  const reloadMemo = useCallback(() => reload === true, [reload]);

  useEffect(() => {
    const getBeds = async () => {
      dispatch(loadBedsAction());

      try {
        const { data } = await bedService.listBeds();
        const beds = data ? data : [];

        dispatch(loadBedsSuccessAction(beds));
      } catch (error) {
        dispatch(loadBedsFailureAction(error));
        console.log(error);
      }
    };

    if (reloadMemo()) {
      getBeds();
    }
  }, [reloadMemo, dispatch]);

  const handleNewBedButtonClick = () => {
    dispatch(showNewBedDialogAction(true));
  };

  const handleOnCreateBed = async (bedName: string, bedSection: string) => {
    try {
      await bedService.createBed({ name: bedName, sector: bedSection });
      dispatch(showNewBedDialogAction(false));
      dispatch(reloadAction(true));
    } catch (error) {
      dispatch(showNewBedDialogAction(false));
      console.log(error);
    }
  };

  const handleOnCancelCreateBed = () => {
    dispatch(showNewBedDialogAction(false));
  };

  const handleOnEditBed = async (name?: string, sector?: string) => {
    if (!name || !sector) {
      return;
    }

    const bedData = {
      name,
      sector,
    };

    try {
      await bedService.updateBed(bed!.id, bedData);

      dispatch(clearBedAction());
      dispatch(reloadAction(true));
    } catch (error) {
      console.error(error);
      dispatch(clearBedAction());
    }
  };

  const handleOnCancelEditBed = () => {
    dispatch(clearBedAction());
  };

  return (
    <Stack grow verticalFill styles={stackStyles}>
      <StackItem>
        <CreateBedHeader onCreateBedClick={handleNewBedButtonClick} />
      </StackItem>
      <StackItem>
        <BedTable beds={beds} />
      </StackItem>

      <CreateBedDialog
        showDialog={showNewBedDialog}
        onSaveClick={handleOnCreateBed}
        onCancelClick={handleOnCancelCreateBed}
      />

      <BedEditDialog
        bed={bed}
        showDialog={!!bed?.id}
        onSaveClick={handleOnEditBed}
        onCancelClick={handleOnCancelEditBed}
      />
    </Stack>
  );
};
