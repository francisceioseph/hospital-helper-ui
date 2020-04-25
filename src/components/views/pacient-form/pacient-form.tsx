import React, { FC } from "react";
import {
  Stack,
  StackItem,
  TextField,
  MaskedTextField,
  PrimaryButton,
  IStackTokens,
  IStackStyles,
} from "@fluentui/react";
import { Controller, useForm } from "react-hook-form";

export const PacientForm: FC = () => {
  const { handleSubmit, control, errors, reset } = useForm();

  const stackTokens: IStackTokens = {
    childrenGap: 16,
  };

  const stackStyles: IStackStyles = {
    root: {
      marginLeft: 16,
      width: "60vw",
    },
  };

  const submit = (data: any) => {
    console.log(data);

    reset({
      fullName: "",
      birthDate: "",
      motherName: "",
      prontuario: "",
      leito: "",
    });
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Stack tokens={stackTokens} styles={stackStyles}>
        <Stack tokens={stackTokens} horizontal>
          <StackItem grow>
            <Controller
              name="fullName"
              label="Nome Completo"
              type="text"
              as={TextField}
              control={control}
              errorMessage={errors.fullName?.message}
              rules={{ required: "campo obrigatório" }}
            />
          </StackItem>
          <Controller
            name="birthDate"
            label="Data de Nascimento"
            type="text"
            mask="99/99/9999"
            as={MaskedTextField}
            control={control}
            errorMessage={errors.birthDate?.message}
            rules={{ required: "campo obrigatório" }}
          />
        </Stack>
        <Controller
          name="motherName"
          label="Nome da Mãe"
          type="text"
          as={TextField}
          control={control}
        />

        <Stack horizontal tokens={stackTokens}>
          <StackItem grow>
            <Controller
              name="prontuario"
              label="Número do Prontuario"
              type="text"
              as={TextField}
              control={control}
              errorMessage={errors.prontuario?.message}
              rules={{ required: "campo obrigatório" }}
            />
          </StackItem>
          <Controller
            name="leito"
            label="Leito"
            type="text"
            as={TextField}
            control={control}
            errorMessage={errors.prontuario?.message}
            rules={{ required: "campo obrigatório" }}
          />
        </Stack>

        <Stack horizontal>
          <StackItem grow>
            <div></div>
          </StackItem>
          <PrimaryButton text="Salvar" type="submit" />
        </Stack>
      </Stack>
    </form>
  );
};
