import React, { useEffect, useCallback } from "react";
import { BedsList } from "../../views/beds-list/BedsList";
import {
  Stack,
  StackItem,
  Text,
  IStackItemStyles,
  IStackStyles,
} from "@fluentui/react";
import { InternshipService } from "../../../service/internship.service";
import { useSelector, useDispatch } from "react-redux";
import {
  loadInternshipsSuccess,
  loadInternshipsFailure,
} from "../../../redux/actions/internship.actions";

export const internshipRoute = "/auth/internship";

const titleStyles: IStackItemStyles = {
  root: {
    padding: "2vh 1rem 2vh 1rem",
    height: "8vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
};

export const InternshipPage: React.FC = () => {
  const { interns, loading } = useSelector((state: any) => state.internships);
  const dispatch = useDispatch();

  const isLoading = useCallback(() => loading === true, [loading]);

  const stackStyles: IStackStyles = {
    root: {
      width: "100%",
    },
  };

  useEffect(() => {
    const internshipService = new InternshipService();

    const fetchInterns = async () => {
      try {
        const { data } = await internshipService.list();
        dispatch(loadInternshipsSuccess({ data }));
      } catch (error) {
        dispatch(loadInternshipsFailure({ error }));
      }
    };

    fetchInterns();
  }, [dispatch, isLoading]);

  return (
    <Stack verticalFill styles={stackStyles}>
      <StackItem styles={titleStyles}>
        <Text variant="large">Pacientes Internados</Text>
      </StackItem>
      <StackItem>
        <BedsList beds={interns}></BedsList>
      </StackItem>
    </Stack>
  );
};
