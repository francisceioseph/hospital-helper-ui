import React, { FC } from "react";
import { IPacient } from "../../../types/models/pacient.interface";
import { Stack, Text } from "@fluentui/react";
import { Card, CardSection } from "@uifabric/react-cards";
import Moment from "react-moment";

interface IPacientDetailsAboutProps {
  pacient?: IPacient;
}

export const PacientDetailsAbout: FC<IPacientDetailsAboutProps> = ({
  pacient,
}) => {
  return (
    <Card>
      <CardSection grow>
        <Text variant="large">{pacient?.fullName}</Text>
        <CardSection
          horizontal
          verticalAlign="center"
          tokens={{ childrenGap: 16 }}
        >
          <Text variant="medium">Data de Nascimento</Text>
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
          <Text variant="medium">Idade</Text>
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
      <CardSection></CardSection>
    </Card>
  );
};
