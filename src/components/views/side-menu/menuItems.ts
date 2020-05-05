import { INavLinkGroup } from "@fluentui/react";
import { Constants } from "../../../constants/constants";

export const menuItems: INavLinkGroup[] = [
  {
    name: "Início",
    links: [
      {
        key: Constants.kHomeRouteKey,
        name: "Página Inicial",
        url: "",
      },
    ],
  },
  {
    name: "Paciente",
    links: [
      {
        key: Constants.kSearchPacientRouteKey,
        name: "Buscar Paciente",
        url: "",
      },
    ],
  },
  {
    name: "Internamento",
    links: [
      {
        key: Constants.kInternshipRouteKey,
        name: "Pacientes Internados",
        url: "",
      },
    ],
  },
  {
    name: "Relatórios",
    links: [
      {
        key: Constants.kEvolutionReport,
        name: "Evoluções (Dia)",
        url: "",
      },
      {
        key: "imprimir-02",
        name: "Imprimir 02",
        url: "",
      },
      {
        key: "imprimir-03",
        name: "Imprimir 03",
        url: "",
      },
    ],
  },
];
