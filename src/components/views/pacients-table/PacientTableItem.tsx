import React, { FC, useRef, useState } from "react";
import { IPacient } from "../../../types/models/pacient.interface";
import { IContextualMenuItem, Text, ContextualMenu } from "@fluentui/react";
import { PacientBedDialog } from "./PacientBed";
import { InternshipService } from "../../../service/internship.service";
import { useHistory } from "react-router";
import { getPacientDetailsRoute } from "../../pages/pacient/PacientDetailsPage";
import { MessageDialog } from "../message-dialog/MessageDialog";

interface ITableItem {
  item: IPacient;
}

export const TableItem: FC<ITableItem> = ({ item }) => {
  const [showContextualMenu, setShowContextualMenu] = useState(false);
  const [showPacientDialog, setShowPacientDialog] = useState(false);
  const [messageDialogData, setMessageDialogData] = useState<any>();

  const history = useHistory();

  const itemRef = useRef(null);

  const menuItems: IContextualMenuItem[] = [
    {
      key: "internar-paciente",
      text: "Internar Paciente",
      iconProps: {
        iconName: "Hotel",
      },
      onClick: () => {
        setShowPacientDialog(true);
      },
    },
    {
      key: "mostrar-paciente",
      text: "Detalhes do Paciente",
      iconProps: {
        iconName: "FabricUserFolder",
      },
      onClick: () => {
        history.push(getPacientDetailsRoute(item.id));
      },
    },
  ];

  const handleSaveInternship = async (bedId: number) => {
    const internshipService = new InternshipService();

    try {
      await internshipService.create({
        pacientId: item.id,
        bedId,
      });
      setMessageDialogData({
        title: "Sucesso",
        message: "Internamento realizado com sucesso",
      });
    } catch (error) {
      setMessageDialogData({
        title: "Erro",
        message: "Paciente já se encontra internado",
      });
      console.log(error);
    } finally {
      setShowPacientDialog(false);
    }
  };

  const handleCancelInternship = () => setShowPacientDialog(false);

  return (
    <div
      style={{ cursor: "pointer" }}
      ref={itemRef}
      onClick={() => {
        setShowContextualMenu(true);
      }}
    >
      <Text
        styles={{
          root: { color: "blue", fontWeight: "bold" },
        }}
      >
        {item.fullName}
      </Text>

      <ContextualMenu
        target={itemRef}
        hidden={!showContextualMenu}
        items={menuItems}
        onItemClick={() => {
          setShowContextualMenu(false);
        }}
        onDismiss={() => {
          setShowContextualMenu(false);
        }}
      />

      {showPacientDialog && (
        <PacientBedDialog
          pacient={item}
          hidden={!showPacientDialog}
          onCancelClick={handleCancelInternship}
          onSaveClick={handleSaveInternship}
        />
      )}

      {messageDialogData !== undefined && (
        <MessageDialog
          title={messageDialogData?.title}
          message={messageDialogData?.message}
          showDialog={messageDialogData !== undefined}
          onOkClick={() => {
            setMessageDialogData(undefined);
          }}
        />
      )}
    </div>
  );
};
