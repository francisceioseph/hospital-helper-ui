import { combineReducers } from "redux";
import { internshipReducer } from "./internship.reducer";
import { pacientsReducer } from "./pacient.reducer";
import { evolutionsReducer } from "./evolution.reducer";
import { bedsReducer } from "./beds.reducer";

export const rootReducer = combineReducers({
  internships: internshipReducer,
  pacients: pacientsReducer,
  evolutions: evolutionsReducer,
  beds: bedsReducer,
});
