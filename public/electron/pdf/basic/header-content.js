const shortid = require("shortid");

module.exports = () => [
  {
    text: "HOSPITAL GERAL MANUEL DE ASSUNÇÃO PIRES",
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
    text: "PREFEITURA MUNICIPAL DE AQUIRAZ",
    alignment: "left",
    style: "subheader",
    id: shortid.generate(),
  },
];
