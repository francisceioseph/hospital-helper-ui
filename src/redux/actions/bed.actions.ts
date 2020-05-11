import { createAction } from "redux-actions";
import { IBed } from "../../types/models/bed.interface";

export const SELECT_BED = "SELECT_BED";
export const CLEAR_BED = "CLEAR_BED";

export const RELOAD_BEDS = "RELOAD_BEDS";
export const LOAD_BEDS = "LOAD_BEDS";
export const LOAD_BEDS_SUCCESS = "LOAD_BEDS_SUCCESS";
export const LOAD_BEDS_FAILURE = "LOAD_BEDS_FAILURE";

export const reloadAction = createAction<boolean>(RELOAD_BEDS);

export const loadBedsAction = createAction(LOAD_BEDS);
export const loadBedsSuccessAction = createAction(LOAD_BEDS_SUCCESS);
export const loadBedsFailureAction = createAction(LOAD_BEDS_FAILURE);

export const selectBed = createAction<IBed>(SELECT_BED);
export const clearBed = createAction(CLEAR_BED);
