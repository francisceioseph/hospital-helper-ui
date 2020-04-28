import React, { useState, useEffect } from "react";
import { BedsList } from "../../views/beds-list/BedsList";
import {
  Stack,
  StackItem,
  Text,
  IStackItemStyles,
  IStackStyles,
} from "@fluentui/react";
import { InternshipService } from "../../../service/internship.service";

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
  const [interns, setInterns] = useState<Array<any>>([]);
  const stackStyles: IStackStyles = {
    root: {
      width: "100%",
    },
  };

  useEffect(() => {
    const internshipService = new InternshipService();

    const fetchInterns = async () => {
      const { data: interns } = await internshipService.list();
      console.log(interns);
      setInterns(interns || []);
    };

    fetchInterns();
  }, []);

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
