import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router";

import {
  Stack,
  TextField,
  PrimaryButton,
  Text,
  IStackStyles,
  DefaultPalette,
} from "@fluentui/react";

import {
  Card,
  CardItem,
  ICardTokens,
  CardSection,
  ICardStyles,
} from "@uifabric/react-cards";

import { AppConstants } from "../../../constants/constants";
import { internshipRoute } from "../beds/InternshipPage";

export const loginRoute = "/login";

export const LoginPage: React.FC = () => {
  const { handleSubmit, control, errors } = useForm();
  const history = useHistory();

  const stackStyles: IStackStyles = {
    root: {
      background: DefaultPalette.neutralLight,
    },
  };

  const cardTokens: ICardTokens = {
    childrenGap: 8,
    padding: 16,
  };

  const cardStyles: ICardStyles = {
    root: {
      background: DefaultPalette.white,
    },
  };

  const onSubmitForm = (data: any) => {
    history.push(internshipRoute);
  };

  return (
    <Stack verticalFill verticalAlign="center" styles={stackStyles}>
      <Stack verticalAlign="center" horizontalAlign="center">
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <Card tokens={cardTokens} styles={cardStyles}>
            <CardSection>
              <Text variant="medium">Entrar</Text>
            </CardSection>
            <CardItem>
              <Controller
                name="email"
                label="E-mail"
                type="text"
                as={TextField}
                control={control}
                errorMessage={errors.email?.message}
                rules={{
                  required: "campo obrigatório",
                  pattern: {
                    value: new RegExp(AppConstants.emailRegex),
                    message: "formato de email inválido",
                  },
                }}
              />
            </CardItem>

            <CardItem>
              <Controller
                name="password"
                label="Password"
                type="password"
                as={TextField}
                control={control}
                errorMessage={errors.password?.message}
                rules={{
                  required: "campo obrigatório",
                  minLength: { value: 6, message: "senha muito curta" },
                }}
              />
            </CardItem>
            <CardItem>
              <PrimaryButton text="Entrar" type="submit" />
            </CardItem>
          </Card>
        </form>
      </Stack>
    </Stack>
  );
};
