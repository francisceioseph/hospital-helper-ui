import { SimpleAction } from "../../types/simple-action.interface";
import {
  LOAD_INTERNSHIPS,
  LOAD_INTERNSHIPS_SUCCESS,
  LOAD_INTERNSHIPS_FAILURE,
} from "../actions/internship.actions";
import { IInternshipState } from "../../types/state/internship-state.interface";

const initialState: IInternshipState = {
  interns: [],
  loading: false,
  error: null,
};

export const internshipReducer = (
  state = initialState,
  action: SimpleAction
): IInternshipState => {
  switch (action.type) {
    case LOAD_INTERNSHIPS: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOAD_INTERNSHIPS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        interns: action.payload.data,
      };
    }
    case LOAD_INTERNSHIPS_FAILURE: {
      return {
        ...state,
        loading: false,
        interns: [],
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
};
