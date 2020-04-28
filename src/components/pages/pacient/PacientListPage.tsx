import React, { FC } from "react";
import { PacientTable } from "../../views/pacients-table/PacientTable";

export const pacientListRouteName = "/auth/pacients";

export const PacientPageList: FC = () => {
  return <PacientTable />;
};
