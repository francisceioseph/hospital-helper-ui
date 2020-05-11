import { createAction } from "redux-actions";

export const RELOAD_BEDS = "RELOAD_BEDS";
export const LOAD_BEDS = "LOAD_BEDS";
export const LOAD_BEDS_SUCCESS = "LOAD_BEDS_SUCCESS";
export const LOAD_BEDS_FAILURE = "LOAD_BEDS_FAILURE";

export const reloadAction = createAction<boolean>(RELOAD_BEDS);

export const loadBedsAction = createAction(LOAD_BEDS);
export const loadBedsSuccessAction = createAction(LOAD_BEDS_SUCCESS);
export const loadBedsFailureAction = createAction(LOAD_BEDS_FAILURE);
