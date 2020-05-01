import React, { FC } from "react";
import { Stack, StackItem } from "@fluentui/react";
import { PacientForm } from "../../views/pacient-form/pacient-form";
import { AddPacientHeader } from "../../views/pacient-add-header/AddPacientHeader";

export const addPacientRoute = "/auth/pacients/add";

export const AddPacientPage: FC = () => {
  return (
    <Stack>
      <StackItem>
        <AddPacientHeader />
      </StackItem>
      <StackItem>
        <PacientForm />
      </StackItem>
    </Stack>
  );
};
