import React, { FC } from "react";
import {
  DatePicker,
  IDatePickerStrings,
  DayOfWeek,
  IDatePickerProps,
} from "@fluentui/react";
import moment from "moment";

const datePickerStrings: IDatePickerStrings = {
  months: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  shortMonths: [
    "Jan",
    "Fev",
    "Mar",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ],

  days: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
  shortDays: ["D", "S", "T", "Q", "Q", "S", "S"],

  goToToday: "Hoje",
  prevMonthAriaLabel: "Mês anterior",
  nextMonthAriaLabel: "Mês seguinte",
  prevYearAriaLabel: "Ano anterior",
  nextYearAriaLabel: "Ano seguinte",
  closeButtonAriaLabel: "Fechar",

  isRequiredErrorMessage: "campo obrigatório",
  invalidInputErrorMessage: "data inválida",
};

export const PtDatePicker: FC<IDatePickerProps> = (props) => {
  return (
    <DatePicker
      allowTextInput
      formatDate={(date) => moment(date).format("DD/MM/YYYY")}
      parseDateFromString={(dateStr) => moment(dateStr, "DD/MM/YYYY").toDate()}
      strings={datePickerStrings}
      firstDayOfWeek={DayOfWeek.Sunday}
      {...props}
    />
  );
};
