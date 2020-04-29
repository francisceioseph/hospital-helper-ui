import { IPacient } from "./pacient.interface";
import { IBed } from "./bed.interface";
import { IEvolution } from "./evolution.interface";

export interface IInternship {
  id: number;
  bedId: number;
  pacientId: number;
  startDate: Date;
  endDate?: Date;
  Pacient?: IPacient;
  Bed?: IBed;
  Evolution?: IEvolution[];
  createdAt?: Date;
  updatedAt?: Date;
}
