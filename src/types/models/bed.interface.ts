import { IInternship } from "./internship.interface";

export interface IBed {
  id: number;
  name: string;
  Internships?: IInternship[];
  createdAt?: Date;
  updatedAt?: Date;
}
