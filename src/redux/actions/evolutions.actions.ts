import { createAction } from "redux-actions";
import { IInternship } from "../../types/models/internship.interface";
import { IEvolution } from "../../types/models/evolution.interface";

export const SET_RELOAD = "SET_RELOAD";
export const SET_INTERNSHIP = "SET_INTERNSHIP";
export const SET_EVOLUTION = "SET_SELECTED_EVOLUTION";

export const SHOW_EVOLUTION_DIALOG = "SET_SHOW_DIALOG";
export const SHOW_REPORT_DIALOG = "SET_SHOW_REPORT_DIALOG_ACTION";

export const SAVE_EVOLUTION = "SAVE_PACIENT_EVOLUTION";
export const SAVE_EVOLUTION_SUCCESS = "SAVE_PACIENT_EVOLUTION_SUCCESS";
export const SAVE_EVOLUTION_FAILURE = "SAVE_PACIENT_EVOLUTION_FAILURE";

export const REPORT_EVOLUTION = "REPORT_PACIENT_EVOLUTION";
export const REPORT_EVOLUTION_SUCCESS = "REPORT_PACIENT_EVOLUTION_SUCCESS";
export const REPORT_EVOLUTION_FAILURE = "REPORT_PACIENT_EVOLUTION_FAILURE";

export const setReload = createAction<boolean>(SET_RELOAD);
export const setEvolution = createAction<IEvolution | undefined>(SET_EVOLUTION);
export const setInternship = createAction<IInternship | undefined>(
  SET_INTERNSHIP
);

export const showEvolutionDialog = createAction<boolean>(SHOW_EVOLUTION_DIALOG);

export const showReportDialog = createAction<boolean>(SHOW_REPORT_DIALOG);

export const reportEvolution = createAction(REPORT_EVOLUTION);
export const reportEvolutionSuccess = createAction(REPORT_EVOLUTION_SUCCESS);
export const reportEvolutionFailure = createAction(REPORT_EVOLUTION_FAILURE);

export const saveEvolution = createAction(SAVE_EVOLUTION);
export const saveEvolutionSuccess = createAction(SAVE_EVOLUTION_SUCCESS);
export const saveEvolutionFailure = createAction(SAVE_EVOLUTION_FAILURE);
