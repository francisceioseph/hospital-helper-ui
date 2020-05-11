import React, { FC, useRef, useState } from "react";
import { Text, ContextualMenu, IContextualMenuItem } from "@fluentui/react";
import { IBed } from "../../../types/models/bed.interface";
import { BedEditDialog } from "./BedEditDialog";
import { BedService } from "../../../service/bed.service";
import { useDispatch } from "react-redux";
import { reloadAction } from "../../../redux/actions/bed.actions";

interface IBedTableItem {
  bed: IBed;
}

export const BedTableItem: FC<IBedTableItem> = ({ bed }) => {
  const dispatch = useDispatch();
  const bedService = new BedService();

  const [showMenu, setShowMenu] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const ref = useRef(null);

  const menuItems: IContextualMenuItem[] = [
    {
      key: "edit-bed",
      text: "Editar",
      iconProps: {
        iconName: "EditNote",
      },
      onClick: () => {
        setShowEditDialog(true);
      },
    },
    {
      key: "remove-bed",
      text: "Remover",
      iconProps: {
        iconName: "Delete",
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
      dispatch(reloadAction(true));
    } catch (error) {
      console.error(error);
    } finally {
      setShowEditDialog(false);
    }
  };

  const handleCancelEditClick = () => {
    setShowEditDialog(false);
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
        showDialog={showEditDialog}
        onSaveClick={handleSaveEditClick}
        onCancelClick={handleCancelEditClick}
      />
    </div>
  );
};
