import React, { FC } from "react";
import { useForm, Controller } from "react-hook-form";
import { IInternship } from "../../../types/models/internship.interface";
import {
  Stack,
  StackItem,
  Dropdown,
  TextField,
  PrimaryButton,
  DefaultButton,
  IStackStyles,
  IStackTokens,
  IDropdownOption,
} from "@fluentui/react";
import { EvolutionService } from "../../../service/evolution.service";
import { IEvolution } from "../../../types/models/evolution.interface";

interface IEvolutionFormProps {
  internship: IInternship;
  onCancelClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  onSubmitClick: () => void;
}

const stackStyles: IStackStyles = {
  root: {
    margin: 16,
    width: "50vw",
  },
};

const stackTokens: IStackTokens = {
  childrenGap: 15,
};

const footerStackTokens: IStackTokens = {
  childrenGap: 15,
};

export const EvolutionForm: FC<IEvolutionFormProps> = ({
  internship,
  onCancelClick,
  onSubmitClick,
}) => {
  const { handleSubmit, control, errors } = useForm();

  const options: IDropdownOption[] = [
    { key: "medico", text: "Evolução Médica" },
    { key: "enfermagem", text: "Evolução da Enfermagem" },
    { key: "fisioterapia", text: "Evolução da Fisioterapia" },
  ];

  const handleSubmitCallback = async (data: any) => {
    const service: EvolutionService = new EvolutionService();

    try {
      const evolutionData: IEvolution = {
        ...data,
        internshipId: internship.id,
      };

      await service.createEvolution(evolutionData);
    } catch (error) {
      console.error(error);
    } finally {
      onSubmitClick();
    }
  };

  const handleDropdownChange = (
    option?: IDropdownOption | undefined,
    index?: number | undefined
  ) => {
    control.setValue("type", option!.key, true);
    console.log(control.getValues());
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitCallback)}>
      <Stack styles={stackStyles} tokens={stackTokens}>
        <StackItem>
          <Controller
            name="type"
            label="Tipo de Evolução"
            as={
              <Dropdown
                options={options}
                onChanged={handleDropdownChange}
                defaultValue={control.getValues("type")}
                errorMessage={errors.type?.message}
              />
            }
            defaultValue={undefined}
            control={control}
            styles={{ root: { minWidth: 166 } }}
            rules={{
              required: "campo obrigatório",
            }}
          />
        </StackItem>
        <StackItem>
          <Controller
            name="author"
            label="Nome do Profissional"
            as={TextField}
            type="text"
            control={control}
            styles={{ root: { minWidth: 166 } }}
            errorMessage={errors.author?.message}
            rules={{ required: "campo obrigatório" }}
          />
        </StackItem>
        <StackItem>
          <Controller
            name="text"
            label="Evolução"
            as={TextField}
            multiline
            rows={10}
            type="text"
            control={control}
            styles={{ root: { minWidth: 166 } }}
            errorMessage={errors.text?.message}
            rules={{ required: "campo obrigatório" }}
          />
        </StackItem>
        <StackItem>
          <Stack horizontal tokens={footerStackTokens}>
            <StackItem grow>
              <div></div>
            </StackItem>
            <PrimaryButton text="Salvar" type="submit" />
            <DefaultButton onClick={onCancelClick} text="Cancelar" />
          </Stack>
        </StackItem>
      </Stack>
    </form>
  );
};
