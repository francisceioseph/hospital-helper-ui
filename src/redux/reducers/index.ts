import { combineReducers } from "redux";
import { internshipReducer, IInternshipState } from "./internship-reducer";
import { pacientsReducer, IPacientState } from "./pacient-reducer";

export interface IAppState {
  internships: IInternshipState;
  pacients: IPacientState;
}

export const rootReducer = combineReducers({
  internships: internshipReducer,
  pacients: pacientsReducer,
});
