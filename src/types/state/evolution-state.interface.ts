import { IInternship } from "../models/internship.interface";
import { IEvolution } from "../models/evolution.interface";

export interface IEvolutionState {
  reload: boolean;
  loading: boolean;
  showDialog: boolean;
  showReportDialog: boolean;
  internship?: IInternship;
  evolution?: IEvolution;
}
