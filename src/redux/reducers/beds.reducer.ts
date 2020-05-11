import { IBedState } from "../../types/state/beds-state.interface";
import { SimpleAction } from "../../types/simple-action.interface";
import { handleActions } from "redux-actions";
import {
  RELOAD_BEDS,
  LOAD_BEDS,
  LOAD_BEDS_SUCCESS,
  LOAD_BEDS_FAILURE,
  SELECT_BED,
  CLEAR_BED,
  SHOW_NEW_BED_DIALOG,
} from "../actions/bed.actions";

const intialState: IBedState = {
  reload: true,
  loading: false,
  showNewBedDialog: false,
  beds: [],
  bed: undefined,
};

const handleShowNewBedDialog = (
  state: IBedState,
  action: SimpleAction
): IBedState => {
  return { ...state, showNewBedDialog: action.payload };
};

const handleReload = (state: IBedState, action: SimpleAction): IBedState => {
  return { ...state, reload: action.payload };
};

const handleLoadBeds = (state: IBedState): IBedState => {
  return {
    ...state,
    loading: true,
    reload: false,
  };
};

const handleLoadBedsSuccess = (
  state: IBedState,
  action: SimpleAction
): IBedState => {
  return {
    ...state,
    loading: false,
    reload: false,
    beds: action.payload,
    error: null,
  };
};

const handleLoadBedsFailure = (
  state: IBedState,
  action: SimpleAction
): IBedState => {
  return {
    ...state,
    loading: false,
    reload: false,
    beds: [],
    error: action.payload,
  };
};

const handleSelectBed = (state: IBedState, action: SimpleAction): IBedState => {
  return {
    ...state,
    bed: action.payload,
  };
};

const handleClearBed = (state: IBedState, action: SimpleAction): IBedState => {
  return { ...state, bed: undefined };
};

export const bedsReducer = handleActions(
  {
    [RELOAD_BEDS]: handleReload,
    [LOAD_BEDS]: handleLoadBeds,
    [LOAD_BEDS_SUCCESS]: handleLoadBedsSuccess,
    [LOAD_BEDS_FAILURE]: handleLoadBedsFailure,
    [SELECT_BED]: handleSelectBed,
    [CLEAR_BED]: handleClearBed,
    [SHOW_NEW_BED_DIALOG]: handleShowNewBedDialog,
  },
  intialState
);
