import { INavLinkGroup } from "@fluentui/react";
import { homeRoute } from "../pages/home/home";
import { bedsRoute } from "../pages/beds/BedsPage";

export const menuItems: INavLinkGroup[] = [
  {
    name: "Início",
    links: [
      {
        key: "home-page",
        name: "Página Inicial",
        url: homeRoute,
      },
    ],
  },
  {
    name: "Paciente",
    links: [
      {
        key: "cadastrar-paciente",
        name: "Cadastrar Paciente",
        url: "",
      },
      {
        key: "buscar-paciente",
        name: "Buscar Paciente",
        url: "",
      },
    ],
  },
  {
    name: "Internamento",
    links: [
      {
        key: "leitos",
        name: "Leitos",
        url: bedsRoute,
      },
    ],
  },
  {
    name: "Utilidades",
    links: [
      {
        key: "imprimir",
        name: "Imprimir 01",
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