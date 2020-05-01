import React, { FC } from "react";
import { IPacient } from "../../../types/models/pacient.interface";
import {
  Stack,
  Text,
  StackItem,
  ITextStyles,
  FontWeights,
} from "@fluentui/react";
import {
  Card,
  CardSection,
  ICardTokens,
  ICardStyles,
} from "@uifabric/react-cards";
import Moment from "react-moment";

interface IPacientDetailsAboutProps {
  pacient?: IPacient;
}

const titleStyles: ITextStyles = {
  root: {
    fontWeight: FontWeights.bold,
  },
};

const cardStyles: ICardStyles = {
  root: {
    marginRight: "2%",
    marginLeft: "2%",
  },
};

const cardTokens: ICardTokens = {
  minWidth: "96%",
  childrenGap: 8,
  padding: 16,
};

export const PacientDetailsAbout: FC<IPacientDetailsAboutProps> = ({
  pacient,
}) => {
  return (
    <Card styles={cardStyles} tokens={cardTokens}>
      <CardSection>
        <Text variant="large">{pacient?.fullName}</Text>
        <CardSection
          horizontal
          verticalAlign="baseline"
          tokens={{ childrenGap: 16 }}
        >
          <Text variant="medium" styles={titleStyles}>
            Data de Nascimento
          </Text>
          <Text variant="medium">
            <Moment
              date={pacient?.birthDate}
              locale="pt-br"
              format="DD/MM/YYYY"
            />
          </Text>
        </CardSection>

        <CardSection
          horizontal
          verticalAlign="center"
          tokens={{ childrenGap: 16 }}
        >
          <Text variant="medium" styles={titleStyles}>
            Idade
          </Text>
          <Text variant="medium">
            <Moment
              date={pacient?.birthDate}
              locale="pt-br"
              fromNow
              ago
              unit="years"
            />
          </Text>
        </CardSection>
      </CardSection>
      <StackItem></StackItem>
    </Card>
  );
};
