const moment = require("moment");
const shortid = require("shortid");

const getEvolutionType = (evolution) => {
  let title;

  switch (evolution.type) {
    case "medico":
      title = "Médica";
      break;

    case "enfermagem":
      title = "Enfermagem";
      break;

    case "fisioterapia":
      title = "Fisioterapia";
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
    text: "Paciente:",
    style: "subheader",
  },
  {
    id: shortid.generate(),
    text: evolution.Internship.Pacient.fullName.toUpperCase(),
    style: "body",
  },
];

const dateField = (evolution) => [
  {
    id: shortid.generate(),
    text: "Data da Evolução:",
    style: "subheader",
  },
  {
    id: shortid.generate(),
    text: moment(evolution.createdAt).format("DD/MM/YYYY [às] HH:mm"),
    style: "body",
  },
];

const authorField = (evolution) => [
  {
    id: shortid.generate(),
    text: "Profissional:",
    style: "subheader",
  },
  {
    id: shortid.generate(),
    text: evolution.author.toUpperCase(),
    style: "body",
  },
];

const typeField = (evolution) => [
  {
    id: shortid.generate(),
    text: "Tipo de Evolução:",
    style: "subheader",
  },
  {
    id: shortid.generate(),
    text: getEvolutionType(evolution).toUpperCase(),
    style: "body",
  },
];

const textField = (evolution) => [
  {
    id: shortid.generate(),
    text: evolution.text.toUpperCase(),
    style: "evolutionTextStyle",
  },

  {
    id: shortid.generate(),
    text:
      "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ",
    style: "separator",
  },
];

module.exports = {
  pacientNameField,
  dateField,
  authorField,
  typeField,
  textField,
};
