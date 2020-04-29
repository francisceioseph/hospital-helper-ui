import { combineReducers } from "redux";
import { internshipReducer } from "./internship-reducer";
import { pacientsReducer } from "./pacient-reducer";

export const rootReducer = combineReducers({
  internships: internshipReducer,
  pacients: pacientsReducer,
});