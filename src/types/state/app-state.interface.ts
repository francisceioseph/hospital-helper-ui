import { IPacientState } from "./pacient-state.interface";
import { IInternshipState } from "./internship-state.interface";

export interface IAppState {
  internships: IInternshipState;
  pacients: IPacientState;
}
