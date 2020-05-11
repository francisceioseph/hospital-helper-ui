import React, { FC, useRef, useState } from "react";
import { Text, ContextualMenu, IContextualMenuItem } from "@fluentui/react";
import { IBed } from "../../../types/models/bed.interface";
import { useDispatch } from "react-redux";
import { selectBedAction } from "../../../redux/actions/bed.actions";

interface IBedTableItem {
  bed: IBed;
}

export const BedTableItem: FC<IBedTableItem> = ({ bed }) => {
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
        dispatch(selectBedAction(bed));
      },
    },
  ];

  const handleTableItemClick = () => {
    setShowMenu(true);
  };

  const handleItemClick = () => {
    setShowMenu(false);
  };

  const handleOnDismiss = () => {
    setShowMenu(false);
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
    </div>
  );
};
