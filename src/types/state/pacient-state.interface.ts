import { IPacient } from "../models/pacient.interface";

export interface IPacientState {
  loading: boolean;
  pacients: IPacient[];
  error: any;
}
