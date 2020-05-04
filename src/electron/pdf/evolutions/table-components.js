const moment = require("moment");

const getEvolutionType = (evolution) => {
  let title;

  switch (evolution.type) {
    case "medico":
      title = "Evolução Médica";
      break;

    case "enfermagem":
      title = "Evolução da Enfermagem";
      break;

    case "fisioterapia":
      title = "Evolução da Fisioterapia";
      break;

    default:
      title = "";
      break;
  }

  return title;
};

const pacientNameField = (evolution) => [
  {
    text: "Nome do Paciente",
    style: "subheader",
  },
  {
    text: evolution.Internship.Pacient.fullName,
  },
];

const dateField = (evolution) => [
  {
    text: "Data da Evolução",
    style: "subheader",
  },
  {
    text: moment(evolution.createdAt).format("DD/MM/YYYY [às] HH:mm"),
  },
];

const authorField = (evolution) => [
  {
    text: "Nome do Profissional",
    style: "subheader",
  },
  {
    text: evolution.author,
  },
];

const typeField = (evolution) => [
  {
    text: "Tipo de Evolução",
    style: "subheader",
  },
  {
    text: getEvolutionType(evolution),
  },
];

const textField = (evolution) => [
  {
    text: "Evolução",
    style: "evolutionTitleStyle",
  },
  {
    text: evolution.text.toUpperCase(),
    style: "evolutionTextStyle",
  },
];

module.exports = {
  pacientNameField,
  dateField,
  authorField,
  typeField,
  textField,
};
