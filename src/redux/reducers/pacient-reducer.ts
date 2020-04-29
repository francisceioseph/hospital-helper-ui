import { SimpleAction } from "../../types/simple-action.interface";
import {
  LOAD_PACIENTS,
  LOAD_PACIENTS_SUCESS,
  LOAD_PACIENTS_FAILURE,
  SORT_PACIENT_LIST_DESC,
  SORT_PACIENT_LIST_ASC,
} from "../actions/pacient-actions";
import { IPacient } from "../../types/models/pacient.interface";
import { IPacientState } from "../../types/state/pacient-state.interface";

const comparePacientAsc = (previous: IPacient, current: IPacient): number => {
  const currentName = current.fullName.toLowerCase();
  const previousName = previous.fullName.toLowerCase();

  if (previousName < currentName) {
    return -1;
  }

  if (previousName > currentName) {
    return 1;
  }

  return 0;
};

const comparePacientDesc = (previous: IPacient, current: IPacient): number => {
  const currentName = current.fullName.toLowerCase();
  const previousName = previous.fullName.toLowerCase();

  if (previousName > currentName) {
    return -1;
  }

  if (previousName < currentName) {
    return 1;
  }

  return 0;
};

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
    case SORT_PACIENT_LIST_ASC: {
      return {
        ...state,
        pacients: state.pacients.sort(comparePacientAsc),
      };
    }

    case SORT_PACIENT_LIST_DESC: {
      return {
        ...state,
        pacients: state.pacients.sort(comparePacientDesc),
      };
    }
    default:
      return state;
  }
};
