import { IInternship } from "./internship.interface";

export interface IBed {
  id: number;
  sector: string;
  name: string;
  Internships?: IInternship[];
  createdAt?: Date;
  updatedAt?: Date;
}
