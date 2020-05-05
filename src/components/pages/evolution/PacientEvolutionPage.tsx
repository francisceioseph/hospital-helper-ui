import React, { FC, useEffect, useCallback, useReducer } from "react";
import { Stack } from "@fluentui/react";
import { useParams } from "react-router";

import { InternshipService } from "../../../service/internship.service";
import { EvolutionList } from "../../views/evolution-list/EvolutionList";
import { EvolutionTitle } from "../../views/evolution-title/evolution-title";
import { EvolutionListPlaceholder } from "../../views/evolution-list/EvolutionListPlaceholder";
import { EvolutionFormDialog } from "../../views/evolution-form/EvolutionFormDialog";
import { LoadingDialog } from "../../views/loading-dialog/LoadingDialog";
import { IEvolutionPageState } from "../../../types/state/pacient-page-state.interface";
import {
  evolutionPageReducer,
  setReload,
  setShowDialog,
  setInternship,
  setShowReportDialog,
  reportPacientEvolution,
  reportPacientEvolutionSuccess,
  reportPacientEvolutionFailure,
} from "./evolution-reducer";

import {
  EvolutionPrintDialog,
  ISaveOptions,
} from "../../views/evolution-print-dialog/EvolutionPrintDialog";

import { ReportService } from "../../../service/report.service";

const initialState: IEvolutionPageState = {
  reload: false,
  loading: false,
  showDialog: false,
  showReportDialog: false,
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

  const printEvolutionClickHandler = (): boolean => {
    dispatch(setShowReportDialog(true));
    return true;
  };

  const saveEvolutionReportClickHandler = async (
    event?: any,
    values?: ISaveOptions
  ) => {
    if (!state.internship || !values) {
      return alert("Error crítico. Por favor, reinicie o programa");
    }

    dispatch(reportPacientEvolution());
    const reportService = new ReportService();

    try {
      await reportService.reportPacientEvolutions(
        state.internship.id,
        values.startDate,
        values.endDate
      );

      dispatch(reportPacientEvolutionSuccess());
    } catch (error) {
      dispatch(reportPacientEvolutionFailure());
    }
  };

  return (
    <Stack grow verticalFill>
      <EvolutionTitle
        internship={state.internship!}
        addEvolutionClick={addEvolutionClickHandler}
        printEvolutionClick={printEvolutionClickHandler}
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
      <EvolutionPrintDialog
        internship={state.internship!}
        showDialog={state.showReportDialog}
        onSaveClick={saveEvolutionReportClickHandler}
        onCancelClick={() => dispatch(setShowReportDialog(false))}
      />
      <LoadingDialog showDialog={state.loading} />
    </Stack>
  );
};
