export interface IEvolution {
  id: number;
  text: string;
  author: string;
  type: "medico" | "enfermagem" | "fisioterapia";
  councilType: "crm" | "corem" | "crefito";
  councilNumber: string;
  createdAt: Date;
}
