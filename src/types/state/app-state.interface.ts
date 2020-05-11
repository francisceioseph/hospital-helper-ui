import { IPacientState } from "./pacient-state.interface";
import { IInternshipState } from "./internship-state.interface";
import { IEvolutionState } from "./evolution-state.interface";
import { IBedState } from "./beds-state.interface";

export interface IAppState {
  internships: IInternshipState;
  pacients: IPacientState;
  evolutions: IEvolutionState;
  beds: IBedState;
}
