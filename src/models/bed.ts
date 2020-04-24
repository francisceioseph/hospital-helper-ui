import { Pacient } from "./pacient";
import { Section } from "./section";

export class Bed {
  constructor(
    public name: string,
    public section: Section,
    public pacient: Pacient,
    public id?: number
  ) {}
}
