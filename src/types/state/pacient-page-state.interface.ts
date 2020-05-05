import { IInternship } from "../models/internship.interface";

export interface IEvolutionPageState {
  reload: boolean;
  loading: boolean;
  showDialog: boolean;
  showReportDialog: boolean;
  internship?: IInternship;
}
