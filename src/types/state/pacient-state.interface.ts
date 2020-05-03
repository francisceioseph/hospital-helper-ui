import { IPacient } from "../models/pacient.interface";

export interface IPacientState {
  loading: boolean;
  showResults: boolean;
  pacients: IPacient[];
  error: any;
}
