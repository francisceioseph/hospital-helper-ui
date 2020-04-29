import React, { FC, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PacientTable } from "../../views/pacients-table/PacientTable";
import { PacientService } from "../../../service/pacient.service";
import {
  loadPacientsSuccess,
  loadPacientsFailure,
} from "../../../redux/actions/pacient-actions";
import {
  Stack,
  StackItem,
  IStackItemStyles,
  Text,
  IStackStyles,
} from "@fluentui/react";
import { IAppState } from "../../../types/state/app-state.interface";

export const pacientListRouteName = "/auth/pacients";

const titleStyles: IStackItemStyles = {
  root: {
    padding: "2vh 1rem 2vh 1rem",
    height: "8vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
};

const stackStyles: IStackStyles = {
  root: {
    width: "100%",
  },
};

export const PacientPageList: FC = () => {
  const { pacients, loading } = useSelector(
    (state: IAppState) => state.pacients
  );

  const dispatch = useDispatch();

  const isLoading = useCallback(() => loading === true, [loading]);

  useEffect(() => {
    const pacientService = new PacientService();

    const loadPacients = async () => {
      try {
        const { data } = await pacientService.listPacient();
        dispatch(loadPacientsSuccess({ data }));
      } catch (error) {
        dispatch(loadPacientsFailure(error));
      }
    };

    loadPacients();
  }, [dispatch, isLoading]);

  return (
    <Stack verticalFill styles={stackStyles}>
      <StackItem styles={titleStyles}>
        <Text variant="large">Pacientes</Text>
      </StackItem>
      <StackItem>
        <PacientTable pacients={pacients} />
      </StackItem>
    </Stack>
  );
};
