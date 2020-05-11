import React, { FC, useRef, useState } from "react";
import { Text, ContextualMenu, IContextualMenuItem } from "@fluentui/react";
import { IBed } from "../../../types/models/bed.interface";
import { BedEditDialog } from "./BedEditDialog";
import { BedService } from "../../../service/bed.service";
import { useDispatch, useSelector } from "react-redux";
import {
  reloadAction,
  selectBed,
  clearBed,
} from "../../../redux/actions/bed.actions";
import { ConfirmDialog } from "../confirm-dialog/confirm-dialog";
import { IBedState } from "../../../types/state/beds-state.interface";
import { IAppState } from "../../../types/state/app-state.interface";

interface IBedTableItem {
  bed: IBed;
}

export const BedTableItem: FC<IBedTableItem> = ({ bed }) => {
  const bedService = new BedService();

  const state: IBedState = useSelector((appState: IAppState) => appState.beds);
  const dispatch = useDispatch();

  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef(null);

  const menuItems: IContextualMenuItem[] = [
    {
      key: "edit-bed",
      text: "Editar",
      iconProps: {
        iconName: "EditNote",
      },
      onClick: () => {
        dispatch(selectBed(bed));
      },
    },
  ];

  const handleTableItemClick = (ev: any) => {
    setShowMenu(true);
  };

  const handleItemClick = () => {
    setShowMenu(false);
  };

  const handleOnDismiss = () => {
    setShowMenu(false);
  };

  const handleSaveEditClick = async (name: string) => {
    const bedData = {
      name,
    };

    try {
      await bedService.updateBed(bed.id, bedData);
      dispatch(clearBed());
      dispatch(reloadAction(true));
    } catch (error) {
      dispatch(clearBed());
      console.error(error);
    }
  };

  const handleCancelEditClick = () => {
    dispatch(clearBed());
  };

  const showEditDialog = () => {
    if (!state.bed) {
      return false;
    } else {
      return state.bed.id === bed.id;
    }
  };

  return (
    <div style={{ cursor: "pointer" }} ref={ref} onClick={handleTableItemClick}>
      <Text
        styles={{
          root: { color: "blue", fontWeight: "bold" },
        }}
      >
        {bed.name}
      </Text>

      <ContextualMenu
        target={ref}
        hidden={!showMenu}
        items={menuItems}
        onItemClick={handleItemClick}
        onDismiss={handleOnDismiss}
      />

      <BedEditDialog
        bed={bed}
        showDialog={showEditDialog()}
        onSaveClick={handleSaveEditClick}
        onCancelClick={handleCancelEditClick}
      />
    </div>
  );
};
