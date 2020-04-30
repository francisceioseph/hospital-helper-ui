import React, { FC, useEffect, useCallback, useReducer } from "react";
import { Stack } from "@fluentui/react";
import { InternshipService } from "../../../service/internship.service";
import { useParams } from "react-router";
import { EvolutionList } from "../../views/evolution-list/EvolutionList";
import { EvolutionTitle } from "../../views/evolution-title/evolution-title";
import { EvolutionListPlaceholder } from "../../views/evolution-list/EvolutionListPlaceholder";
import { EvolutionFormDialog } from "../../views/evolution-form/EvolutionFormDialog";
import { IEvolutionPageState } from "../../../types/state/pacient-page-state.interface";
import {
  evolutionPageReducer,
  setReload,
  setShowDialog,
  setInternship,
} from "./evolution-reducer";

const initialState: IEvolutionPageState = {
  reload: false,
  showDialog: false,
};

export const pacientEvolutionRoute = "/auth/internship/:id/evolution";

export const PacientEvolutionPage: FC = () => {
  const { id } = useParams();

  const [state, dispatch] = useReducer(evolutionPageReducer, initialState);

  const reloadMemo = useCallback(() => state.reload === true, [state.reload]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const internshipService = new InternshipService();
        const { data: internship } = await internshipService.show(
          parseInt(id!)
        );

        dispatch(setInternship(internship));
        dispatch(setReload(false));
      } catch (error) {
        dispatch(setInternship(undefined));
      }
    };

    loadData();
  }, [id, reloadMemo]);

  const closeModalHandler = (reload?: boolean) => {
    if (reload) {
      dispatch(setReload(true));
    }
    dispatch(setShowDialog(false));
  };

  const addEvolutionClickHandler = (): boolean => {
    dispatch(setShowDialog(true));
    return true;
  };

  return (
    <Stack grow verticalFill>
      <EvolutionTitle
        internship={state.internship!}
        addEvolutionClick={addEvolutionClickHandler}
      />
      {state.internship?.Evolution?.length ? (
        <EvolutionList internship={state.internship!} />
      ) : (
        <EvolutionListPlaceholder />
      )}
      <EvolutionFormDialog
        showDialog={state.showDialog}
        internship={state.internship!}
        onCloseCallback={closeModalHandler}
      />
    </Stack>
  );
};
