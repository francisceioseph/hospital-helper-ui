import React, { FC, useEffect, useState } from "react";
import {
  Stack,
  StackItem,
  TextField,
  PrimaryButton,
  IStackTokens,
  IStackStyles,
  IDropdownOption,
  Dropdown,
} from "@fluentui/react";
import { Controller, useForm } from "react-hook-form";
import { PacientService } from "../../../service/pacient.service";
import { BedService } from "../../../service/bed.service";

const pacientService = new PacientService();
const bedService = new BedService();

export const PacientForm: FC = () => {
  const { handleSubmit, control, errors, reset } = useForm();
  const [bedOptions, setBedOptions] = useState<IDropdownOption[]>([]);
  const [bedId, setBedId] = useState<number>();

  const stackTokens: IStackTokens = {
    childrenGap: 16,
  };

  const stackStyles: IStackStyles = {
    root: {
      marginLeft: 16,
      width: "60vw",
    },
  };

  const getBedsNotInUse = async () => {
    const response = await bedService.listNotInUse();
    const beds = response.data || [];
    const options = beds.map<IDropdownOption>((bed) => ({
      key: bed.id,
      text: bed.name,
    }));

    console.log(response);

    setBedOptions(options);
  };

  const handleDropdownChange = (event: any[]) => {
    const item: IDropdownOption = event[1];
    setBedId(parseInt(item.key.toString()));
  };

  useEffect(() => {
    getBedsNotInUse();
  }, []);

  const submit = (data: any) => {
    pacientService
      .createPacient({
        ...data,
        bed_id: bedId,
      })
      .then(() => {
        reset({
          fullName: "",
          birthDate: "",
          motherName: "",
          prontuario: "",
          bed_id: "",
        });
        setBedId(undefined);
        getBedsNotInUse();
      })
      .catch((error) => {
        console.error(error);
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
            type="date"
            as={TextField}
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
            name="bed_id"
            label="Leito"
            as={Dropdown}
            options={bedOptions}
            control={control}
            defaultValue={bedId}
            styles={{ root: { minWidth: 166 } }}
            onChange={handleDropdownChange}
            errorMessage={errors.prontuario?.message}
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
