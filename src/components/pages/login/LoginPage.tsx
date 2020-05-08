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

import { internshipRoute } from "../beds/InternshipPage";
import { UserService } from "../../../service/user.service";

const userService = new UserService();

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

  const onSubmitForm = async (data: any) => {
    try {
      const response = await userService.authtenticateUser({
        username: data.username,
        password: data.password,
      });

      if (response.error) {
        alert(
          "Não foi possível realizar login. Verifique o nome de usuário e a senha"
        );
      } else {
        history.push(internshipRoute);
      }
    } catch (error) {
      console.log(error);
      alert(
        "Não foi possível realizar login. Verifique o nome de usuário e a senha"
      );
    }
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
                name="username"
                label="Nome de Usuário"
                type="text"
                as={TextField}
                control={control}
                errorMessage={errors.email?.message}
                rules={{
                  required: "campo obrigatório",
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
                  minLength: { value: 5, message: "senha muito curta" },
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
