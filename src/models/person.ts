export class Person {
  constructor(
    public name: string,
    public motherName: string,
    public birthDate: string,
    public cpf?: string,
    public rg?: string
  ) {}
}
