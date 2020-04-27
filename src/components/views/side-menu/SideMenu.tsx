import React from "react";
import { Nav, INavStyles, INavLink } from "@fluentui/react";
import { menuItems } from "./menuItems";
import { useHistory } from "react-router";
import { internshipRoute } from "../../pages/beds/InternshipPage";
import { homeRoute } from "../../pages/home/home";
import { Constants } from "../../../constants/constants";
import { addPacientRoute } from "../../pages/pacient/AddPacientPage";

export const SideMenu: React.FC = () => {
  const navStyles: Partial<INavStyles> = {
    root: {
      background: "linear-gradient(to bottom, #7BA2E7 0%, #6375D6 100%)",
      width: 200,
      height: "100vh",
      boxSizing: "border-box",
      border: "1px solid #eee",
      overflowY: "auto",
    },
    group: {
      backgroundColor: "#D6DFF7",
      color: "#215DC6",
      margin: "8px 8px 0 8px ",
      border: "1px solid #FFF",
      borderRadius: "3px 3px 0 0",
    },

    groupContent: {
      marginBottom: 0,
    },

    chevronButton: {
      marginTop: 0,
      background: "linear-gradient(to right, #FFFFFF 0%, #C7D3F7 100%)",
      fontSize: "1rem",
    },
  };

  const history = useHistory();

  const handleLinkClick = (_?: any, item?: INavLink) => {
    switch (item?.key) {
      case Constants.kHomeRouteKey: {
        history.push(homeRoute);
        break;
      }
      case Constants.kInternshipRouteKey: {
        history.push(internshipRoute);
        break;
      }
      case Constants.kNewPacientRouteKey: {
        history.push(addPacientRoute);
        break;
      }
      default: {
        return;
      }
    }
  };

  return (
    <Nav styles={navStyles} groups={menuItems} onLinkClick={handleLinkClick} />
  );
};
