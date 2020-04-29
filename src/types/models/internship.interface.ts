import { IPacient } from "./pacient.interface";
import { IBed } from "./bed.interface";

export interface IInternship {
  id: number;
  bedId: number;
  pacientId: number;
  startDate: Date;
  endDate?: Date;
  Pacient?: IPacient;
  Bed?: IBed;
  createdAt?: Date;
  updatedAt?: Date;
}
