import { IInternship } from "../models/internship.interface";

export interface IEvolutionPageState {
  reload: boolean;
  showDialog: boolean;
  internship?: IInternship;
}
