import { INavLinkGroup } from "@fluentui/react";
import { AppConstants } from "../../../constants/constants";

export const menuItems: INavLinkGroup[] = [
  {
    name: "Internamento",
    links: [
      {
        key: AppConstants.kInternshipRouteKey,
        name: "Pacientes Internados",
        url: "",
        iconProps: { iconName: "Hotel" },
      },
    ],
  },
  {
    name: "Paciente",
    links: [
      {
        key: AppConstants.kSearchPacientRouteKey,
        name: "Buscar Pacientes",
        url: "",
        iconProps: { iconName: "Search" },
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
        iconProps: { iconName: "Health" },
      },
    ],
  },
  {
    name: "Configurações",
    links: [
      {
        key: AppConstants.kAddBed,
        name: "Cadastrar Leitos",
        url: "",
        iconProps: { iconName: "AddToShoppingList" },
      },
      {
        key: "cad-users",
        name: "Cadastrar Usuários",
        url: "",
        iconProps: { iconName: "PeopleAdd" },
      },
    ],
  },
];
