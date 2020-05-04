const moment = require("moment");
const shortid = require("shortid");

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
    id: shortid.generate(),
    text: "Nome do Paciente",
    style: "subheader",
  },
  {
    id: shortid.generate(),
    text: evolution.Internship.Pacient.fullName,
  },
];

const dateField = (evolution) => [
  {
    id: shortid.generate(),
    text: "Data da Evolução",
    style: "subheader",
  },
  {
    id: shortid.generate(),
    text: moment(evolution.createdAt).format("DD/MM/YYYY [às] HH:mm"),
  },
];

const authorField = (evolution) => [
  {
    id: shortid.generate(),
    text: "Nome do Profissional",
    style: "subheader",
  },
  {
    id: shortid.generate(),
    text: evolution.author,
  },
];

const typeField = (evolution) => [
  {
    id: shortid.generate(),
    text: "Tipo de Evolução",
    style: "subheader",
  },
  {
    id: shortid.generate(),
    text: getEvolutionType(evolution),
  },
];

const textField = (evolution) => [
  {
    id: shortid.generate(),
    text: "Evolução",
    style: "evolutionTitleStyle",
  },
  {
    id: shortid.generate(),
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
