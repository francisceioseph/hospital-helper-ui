import { Pacient } from "../../models/pacient";
import { SimpleAction } from "../../types/simple-action.interface";
import {
  LOAD_PACIENTS,
  LOAD_PACIENTS_SUCESS,
  LOAD_PACIENTS_FAILURE,
} from "../actions/pacient-actions";

export interface IPacientState {
  loading: boolean;
  pacients: Pacient[];
  error: any;
}

const initialState: IPacientState = {
  pacients: [],
  loading: false,
  error: null,
};

export const pacientsReducer = (
  state = initialState,
  action: SimpleAction
): IPacientState => {
  switch (action.type) {
    case LOAD_PACIENTS: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOAD_PACIENTS_SUCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        pacients: action.payload.data,
      };
    }
    case LOAD_PACIENTS_FAILURE: {
      return {
        ...state,
        loading: false,
        pacients: [],
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
};
