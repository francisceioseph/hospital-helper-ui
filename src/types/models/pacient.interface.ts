import { IInternship } from "./internship.interface";

export interface IPacient {
  id: number;
  fullName: string;
  birthDate: Date;
  motherName: string;
  prontuario: string;
  createdAt?: Date;
  updatedAt?: Date;
  Internships?: IInternship[];
}
