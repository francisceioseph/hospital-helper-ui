import React, { FC, useEffect, useCallback } from "react";
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
import { useDispatch } from "react-redux";
import {
  saveEvolution,
  saveEvolutionSuccess,
  saveEvolutionFailure,
  setEvolution,
} from "../../../redux/actions/evolutions.actions";

interface IEvolutionFormProps {
  internship: IInternship;
  onCancelClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  onSubmitClick: () => void;
  evolution?: IEvolution;
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
  evolution,
  onCancelClick,
  onSubmitClick,
}) => {
  const { handleSubmit, control, errors } = useForm();
  const evolutionMemo = useCallback(() => evolution, [evolution]);
  const dispatch = useDispatch();

  const options: IDropdownOption[] = [
    { key: "medico", text: "Evolução Médica" },
    { key: "enfermagem", text: "Evolução da Enfermagem" },
    { key: "fisioterapia", text: "Evolução da Fisioterapia" },
  ];

  const handleCancel = (ev: React.MouseEvent<HTMLDivElement>) => {
    dispatch(setEvolution(undefined));
    onCancelClick(ev);
  };

  const handleSubmitCallback = async (data: any) => {
    dispatch(saveEvolution());
    const service: EvolutionService = new EvolutionService();

    try {
      const evolutionData: IEvolution = {
        ...data,
        internshipId: internship.id,
      };

      if (evolution) {
        await service.updateEvolution(evolution.id, evolutionData);
      } else {
        await service.createEvolution(evolutionData);
      }

      dispatch(saveEvolutionSuccess());
    } catch (error) {
      console.error(error);
      dispatch(saveEvolutionFailure());
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

  useEffect(() => {
    const ev = evolutionMemo();

    if (ev) {
      control.setValue("type", ev.type);
      control.setValue("author", ev.author);
      control.setValue("text", ev.text);
    }
  }, [evolutionMemo, control]);

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
                defaultSelectedKey={evolutionMemo()?.type}
                errorMessage={errors.type?.message}
              />
            }
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
            <DefaultButton onClick={handleCancel} text="Cancelar" />
          </Stack>
        </StackItem>
      </Stack>
    </form>
  );
};
