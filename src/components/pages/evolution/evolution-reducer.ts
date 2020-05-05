import { SimpleAction } from "../../../types/simple-action.interface";
import { IInternship } from "../../../types/models/internship.interface";

export const SET_RELOAD_ACTION = "SET_RELOAD";
export const SET_INTERNSHIP_ACTION = "SET_INTERNSHIP";
export const SET_SHOW_DIALOG_ACTION = "SET_SHOW_DIALOG";
export const SET_SHOW_REPORT_DIALOG_ACTION = "SET_SHOW_REPORT_DIALOG_ACTION";

export const REPORT_PACIENT_EVOLUTION = "REPORT_PACIENT_EVOLUTION";
export const REPORT_PACIENT_EVOLUTION_SUCCESS =
  "REPORT_PACIENT_EVOLUTION_SUCCESS";
export const REPORT_PACIENT_EVOLUTION_FAILURE =
  "REPORT_PACIENT_EVOLUTION_FAILURE";

export const setReload = (payload: boolean): SimpleAction => {
  return {
    type: SET_RELOAD_ACTION,
    payload,
  };
};

export const setInternship = (payload?: IInternship): SimpleAction => {
  return {
    type: SET_INTERNSHIP_ACTION,
    payload,
  };
};

export const setShowDialog = (payload: boolean): SimpleAction => {
  return {
    type: SET_SHOW_DIALOG_ACTION,
    payload,
  };
};

export const setShowReportDialog = (payload: boolean): SimpleAction => {
  return {
    type: SET_SHOW_REPORT_DIALOG_ACTION,
    payload,
  };
};

export const reportPacientEvolution = (): SimpleAction => {
  return {
    type: REPORT_PACIENT_EVOLUTION,
    payload: null,
  };
};

export const reportPacientEvolutionSuccess = (): SimpleAction => {
  return {
    type: REPORT_PACIENT_EVOLUTION_SUCCESS,
    payload: null,
  };
};

export const reportPacientEvolutionFailure = (): SimpleAction => {
  return {
    type: REPORT_PACIENT_EVOLUTION_FAILURE,
    payload: null,
  };
};

export const evolutionPageReducer = (state: any, action: SimpleAction): any => {
  switch (action.type) {
    case SET_RELOAD_ACTION: {
      return { ...state, reload: action.payload };
    }

    case SET_INTERNSHIP_ACTION: {
      return {
        ...state,
        internship: action.payload,
      };
    }

    case SET_SHOW_DIALOG_ACTION: {
      return {
        ...state,
        showDialog: action.payload,
      };
    }

    case SET_SHOW_REPORT_DIALOG_ACTION: {
      return {
        ...state,
        showReportDialog: action.payload,
      };
    }

    case REPORT_PACIENT_EVOLUTION: {
      return {
        ...state,
        loading: true,
      };
    }

    case REPORT_PACIENT_EVOLUTION_SUCCESS: {
      return {
        ...state,
        showReportDialog: false,
        loading: false,
      };
    }

    case REPORT_PACIENT_EVOLUTION_FAILURE: {
      return {
        ...state,
        showReportDialog: false,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
};
