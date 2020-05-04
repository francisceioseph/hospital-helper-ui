const shortid = require("shortid");

module.exports = () => [
  {
    text: "PREFEITURA MUNICIPAL DE AQUIRAZ",
    alignment: "left",
    style: "header",
    id: shortid.generate(),
  },
  {
    text: "SECRETARIA MUNICIPAL DE SAÚDE",
    alignment: "left",
    style: "subheader",
    id: shortid.generate(),
  },
  {
    text: "HOSPITAL GERAL MANUEL DE ASSUNÇÃO PIRES",
    alignment: "left",
    style: "subheader",
    id: shortid.generate(),
  },
];
