export interface IPacient {
  id: number;
  fullName: string;
  birthDate: string;
  motherName: string;
  prontuario: string;
  createdAt?: Date;
  updatedAt?: Date;
}
