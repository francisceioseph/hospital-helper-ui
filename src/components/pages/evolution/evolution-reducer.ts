import { SimpleAction } from "../../../types/simple-action.interface";
import { IInternship } from "../../../types/models/internship.interface";

export const SET_RELOAD_ACTION = "SET_RELOAD";
export const SET_INTERNSHIP_ACTION = "SET_INTERNSHIP";
export const SET_SHOW_DIALOG_ACTION = "SET_SHOW_DIALOG";

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

    default: {
      return state;
    }
  }
};
