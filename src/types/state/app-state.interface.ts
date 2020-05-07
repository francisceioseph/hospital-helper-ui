import { IPacientState } from "./pacient-state.interface";
import { IInternshipState } from "./internship-state.interface";
import { IEvolutionState } from "./evolution-state.interface";

export interface IAppState {
  internships: IInternshipState;
  pacients: IPacientState;
  evolutions: IEvolutionState;
}
