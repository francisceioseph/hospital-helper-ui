import { IInternship } from "../models/internship.interface";

export interface IInternshipState {
  interns: IInternship[];
  loading: boolean;
  error?: any;
}
