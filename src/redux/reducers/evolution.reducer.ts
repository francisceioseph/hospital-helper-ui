import { handleActions } from "redux-actions";

import {
  SET_RELOAD,
  SET_INTERNSHIP,
  SET_EVOLUTION,
  SHOW_EVOLUTION_DIALOG,
  SHOW_REPORT_DIALOG,
  SAVE_EVOLUTION,
  SAVE_EVOLUTION_SUCCESS,
  SAVE_EVOLUTION_FAILURE,
  REPORT_EVOLUTION,
  REPORT_EVOLUTION_SUCCESS,
  REPORT_EVOLUTION_FAILURE,
} from "../actions/evolutions.actions";

import { IEvolutionState } from "../../types/state/evolution-state.interface";
import { SimpleAction } from "../../types/simple-action.interface";

const handleSetReload = (state: IEvolutionState, action: any) => ({
  ...state,
  reload: action.payload,
});

const handleShowEvolutionDialog = (
  state: IEvolutionState,
  action: SimpleAction
) => ({
  ...state,
  showDialog: action.payload,
});

const handleReportDialog = (state: IEvolutionState, action: SimpleAction) => ({
  ...state,
  showReportDialog: action.payload,
});

const handleSetInternship = (state: IEvolutionState, action: SimpleAction) => ({
  ...state,
  internship: action.payload,
});

const handleEvolutionReport = (state: IEvolutionState) => ({
  ...state,
  loading: true,
});

const handleEvolutionReportSuccess = (state: IEvolutionState) => ({
  ...state,
  showReportDialog: false,
  loading: false,
});

const handleEvolutionReportFailure = (state: IEvolutionState) => ({
  ...state,
  showReportDialog: false,
  loading: false,
});

const handleSaveEvolution = (state: IEvolutionState) => ({
  ...state,
  loading: true,
});

const handleSavEvolutionSuccess = (state: IEvolutionState) => ({
  ...state,
  showDialog: false,
  loading: false,
  evolution: undefined,
});

const handleSaveEvolutionFailure = (state: IEvolutionState) => ({
  ...state,
  showDialog: false,
  loading: false,
  evolution: undefined,
});

const handleSetEvolution = (state: IEvolutionState, action: SimpleAction) => ({
  ...state,
  evolution: action.payload,
});

export const evolutionsReducer = handleActions(
  {
    [SET_RELOAD]: handleSetReload,
    [SET_INTERNSHIP]: handleSetInternship,
    [SET_EVOLUTION]: handleSetEvolution,
    [SHOW_EVOLUTION_DIALOG]: handleShowEvolutionDialog,
    [SHOW_REPORT_DIALOG]: handleReportDialog,
    [SAVE_EVOLUTION]: handleSaveEvolution,
    [SAVE_EVOLUTION_SUCCESS]: handleSavEvolutionSuccess,
    [SAVE_EVOLUTION_FAILURE]: handleSaveEvolutionFailure,
    [REPORT_EVOLUTION]: handleEvolutionReport,
    [REPORT_EVOLUTION_SUCCESS]: handleEvolutionReportSuccess,
    [REPORT_EVOLUTION_FAILURE]: handleEvolutionReportFailure,
  },
  { reload: false, loading: false, showDialog: false, showReportDialog: false }
);
