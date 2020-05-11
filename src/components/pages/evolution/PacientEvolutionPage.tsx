import React, { FC, useEffect, useCallback } from "react";
import { Stack } from "@fluentui/react";
import { useParams } from "react-router";

import { InternshipService } from "../../../service/internship.service";
import { EvolutionList } from "../../views/evolution-list/EvolutionList";
import { EvolutionTitle } from "../../views/evolution-title/evolution-title";
import { EvolutionListPlaceholder } from "../../views/evolution-list/EvolutionListPlaceholder";
import { EvolutionFormDialog } from "../../views/evolution-form/EvolutionFormDialog";
import { LoadingDialog } from "../../views/loading-dialog/LoadingDialog";
import {
  setReload,
  setInternship,
  showEvolutionDialog,
  showReportDialog,
  reportEvolution,
  reportEvolutionSuccess,
  reportEvolutionFailure,
} from "../../../redux/actions/evolutions.actions";

import {
  EvolutionPrintDialog,
  ISaveOptions,
} from "../../views/evolution-print-dialog/EvolutionPrintDialog";

import { ReportService } from "../../../service/report.service";
import { useSelector, useDispatch } from "react-redux";
import { IAppState } from "../../../types/state/app-state.interface";

export const pacientEvolutionRoute = "/auth/internship/:id/evolution";

export const PacientEvolutionPage: FC = () => {
  const { id } = useParams();

  const state = useSelector((appState: IAppState) => appState.evolutions);
  const dispatch = useDispatch();

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
  }, [id, reloadMemo, dispatch]);

  const closeModalHandler = (reload?: boolean) => {
    if (reload) {
      dispatch(setReload(true));
    }
    dispatch(showEvolutionDialog(false));
  };

  const addEvolutionClickHandler = (): boolean => {
    dispatch(showEvolutionDialog(true));
    return true;
  };

  const printEvolutionClickHandler = (): boolean => {
    dispatch(showReportDialog(true));
    return true;
  };

  const saveEvolutionReportClickHandler = async (
    event?: any,
    values?: ISaveOptions
  ) => {
    if (!state.internship || !values) {
      return;
    }

    dispatch(reportEvolution());
    const reportService = new ReportService();

    try {
      await reportService.reportPacientEvolutions(
        state.internship.id,
        values.startDate,
        values.endDate
      );

      dispatch(reportEvolutionSuccess());
    } catch (error) {
      dispatch(reportEvolutionFailure());
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
        evolution={state.evolution}
        showDialog={state.showDialog}
        internship={state.internship!}
        onCloseCallback={closeModalHandler}
      />
      <EvolutionPrintDialog
        internship={state.internship!}
        showDialog={state.showReportDialog}
        onSaveClick={saveEvolutionReportClickHandler}
        onCancelClick={() => dispatch(showReportDialog(false))}
      />
      <LoadingDialog showDialog={state.loading} />
    </Stack>
  );
};
