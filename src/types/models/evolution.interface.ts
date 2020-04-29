export interface IEvolution {
  id: number;
  text: string;
  author: string;
  type: "medico" | "enfermagem" | "fisioterapia";
  createdAt: Date;
}
