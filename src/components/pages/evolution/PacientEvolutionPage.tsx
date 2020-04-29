import React, { FC, useState, useEffect } from "react";
import { Stack } from "@fluentui/react";
import { IInternship } from "../../../types/models/internship.interface";
import { InternshipService } from "../../../service/internship.service";
import { useParams } from "react-router";
import { EvolutionList } from "./evolution-list/EvolutionList";
import { EvolutionTitle } from "./evolution-title/evolution-title";
import { EvolutionListPlaceholder } from "./evolution-list/EvolutionListPlaceholder";

export const pacientEvolutionRoute = "/auth/internship/:id/evolution";

export const PacientEvolutionPage: FC = () => {
  const { id } = useParams();
  const [internship, setInternship] = useState<IInternship>();

  useEffect(() => {
    const loadData = async () => {
      try {
        const internshipService = new InternshipService();
        const { data: internship } = await internshipService.show(
          parseInt(id!)
        );

        setInternship(internship);
      } catch (error) {
        setInternship(undefined);
      }
    };

    loadData();
  }, [id]);

  return (
    <Stack grow verticalFill>
      <EvolutionTitle internship={internship!} />
      {internship?.Evolution?.length ? (
        <EvolutionList internship={internship!} />
      ) : (
        <EvolutionListPlaceholder />
      )}
    </Stack>
  );
};
