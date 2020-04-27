import React, { useState, useEffect } from "react";
import { BedsList } from "../../views/beds-list/BedsList";
import {
  Stack,
  StackItem,
  Text,
  IStackItemStyles,
  IStackStyles,
} from "@fluentui/react";
import { BedService } from "../../../service/bed.service";

export const bedsRoute = "/auth/beds";

const titleStyles: IStackItemStyles = {
  root: {
    padding: "2vh 1rem 2vh 1rem",
    height: "8vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
};

export const BedsPage: React.FC = () => {
  const [beds, setBeds] = useState<Array<any>>([]);

  const stackStyles: IStackStyles = {
    root: {
      width: "100%",
    },
  };

  useEffect(() => {
    const bedService = new BedService();

    const fetchBeds = async () => {
      const { data: beds } = await bedService.listBedsInUse();
      console.log(beds);
      setBeds(beds || []);
    };

    fetchBeds();
  }, []);

  return (
    <Stack verticalFill styles={stackStyles}>
      <StackItem styles={titleStyles}>
        <Text variant="large">Leitos</Text>
      </StackItem>
      <StackItem>
        <BedsList beds={beds}></BedsList>
      </StackItem>
    </Stack>
  );
};
