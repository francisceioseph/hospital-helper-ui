import { Person } from "./person";

export class Pacient extends Person {
  constructor(
    public name: string,
    public motherName: string,
    public birthDate: string,
    public cpf?: string,
    public rg?: string,
    public susNumber?: string,
    public id?: number
  ) {
    super(name, motherName, birthDate, cpf, rg);
  }
}
