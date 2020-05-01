import React, { FC, useState, useEffect } from "react";
import { Stack, StackItem, IStackItemStyles } from "@fluentui/react";
import { PacientDetailsHeader } from "../../views/pacient-details-header/PacientDetailsHeader";
import { useParams } from "react-router";
import { IPacient } from "../../../types/models/pacient.interface";
import { PacientService } from "../../../service/pacient.service";
import { PacientDetailsAbout } from "../../views/pacient-details-about/PacientDetailsAbout";

export const pacientDetailsPageRoute = "/auth/pacients/:id/show";
export const getPacientDetailsRoute = (id: number) =>
  `/auth/pacients/${id}/show`;

export const PacientDetailsPage: FC = () => {
  const { id } = useParams();
  const [pacient, setPacient] = useState<IPacient>();

  useEffect(() => {
    const pacientService: PacientService = new PacientService();
    const getPacient = async () => {
      try {
        const { data } = await pacientService.showPacient(parseInt(id!));
        setPacient(data);
      } catch (error) {
        setPacient(undefined);
        console.log(error);
      }
    };

    getPacient();
  }, [id]);
  return (
    <Stack grow>
      <PacientDetailsHeader />
      <PacientDetailsAbout pacient={pacient} />
    </Stack>
  );
};
