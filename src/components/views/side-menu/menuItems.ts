import { INavLinkGroup } from "@fluentui/react";
import { AppConstants } from "../../../constants/constants";

export const menuItems: INavLinkGroup[] = [
  {
    name: "Paciente",
    links: [
      {
        key: AppConstants.kSearchPacientRouteKey,
        name: "Buscar Paciente",
        url: "",
      },
    ],
  },
  {
    name: "Internamento",
    links: [
      {
        key: AppConstants.kInternshipRouteKey,
        name: "Pacientes Internados",
        url: "",
      },
    ],
  },
  {
    name: "Relatórios",
    links: [
      {
        key: AppConstants.kEvolutionReport,
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
