import { combineReducers } from "redux";
import { internshipReducer } from "./internship-reducer";

export const rootReducer = combineReducers({
  internships: internshipReducer,
});
