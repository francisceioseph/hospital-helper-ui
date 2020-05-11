import { IBedState } from "../../types/state/beds-state.interface";
import { SimpleAction } from "../../types/simple-action.interface";
import { handleActions } from "redux-actions";
import {
  RELOAD_BEDS,
  LOAD_BEDS,
  LOAD_BEDS_SUCCESS,
  LOAD_BEDS_FAILURE,
} from "../actions/bed.actions";

const intialState: IBedState = {
  reload: false,
  loading: false,
  beds: [],
};

const handleReload = (state: IBedState, action: SimpleAction): IBedState => {
  return { ...state, reload: action.payload };
};

const handleLoadBeds = (state: IBedState): IBedState => {
  return {
    ...state,
    loading: true,
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

export const bedsReducer = handleActions(
  {
    [RELOAD_BEDS]: handleReload,
    [LOAD_BEDS]: handleLoadBeds,
    [LOAD_BEDS_SUCCESS]: handleLoadBedsSuccess,
    [LOAD_BEDS_FAILURE]: handleLoadBedsFailure,
  },
  intialState
);
