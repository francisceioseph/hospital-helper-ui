import React, { FC, useState, useEffect } from "react";
import { Stack, IContextualMenuItem } from "@fluentui/react";
import { IInternship } from "../../../types/models/internship.interface";
import { InternshipService } from "../../../service/internship.service";
import { useParams } from "react-router";
import { EvolutionList } from "./evolution-list/EvolutionList";
import { EvolutionTitle } from "./evolution-title/evolution-title";
import { EvolutionListPlaceholder } from "./evolution-list/EvolutionListPlaceholder";
import { EvolutionFormDialog } from "./evolution-form/EvolutionFormDialog";

export const pacientEvolutionRoute = "/auth/internship/:id/evolution";

export const PacientEvolutionPage: FC = () => {
  const { id } = useParams();
  const [internship, setInternship] = useState<IInternship>();
  const [showDialog, setShowDialog] = useState<boolean>(false);

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

  const closeModalHandler = () => {
    setShowDialog(false);
  };

  const addEvolutionClickHandler = (
    ev?:
      | React.MouseEvent<HTMLElement, MouseEvent>
      | React.KeyboardEvent<HTMLElement>
      | undefined,
    item?: IContextualMenuItem | undefined
  ): boolean => {
    setShowDialog(true);
    return true;
  };

  return (
    <Stack grow verticalFill>
      <EvolutionTitle
        internship={internship!}
        addEvolutionClick={addEvolutionClickHandler}
      />
      {internship?.Evolution?.length ? (
        <EvolutionList internship={internship!} />
      ) : (
        <EvolutionListPlaceholder />
      )}
      <EvolutionFormDialog
        showDialog={showDialog}
        internship={internship!}
        onCloseCallback={closeModalHandler}
      />
    </Stack>
  );
};
