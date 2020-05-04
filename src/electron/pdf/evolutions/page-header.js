const shortid = require("shortid");
const basicHeader = require("../basic/header-content");

module.exports = (date) => [
  ...basicHeader(),
  {
    text: `Relatório de Evoluções ${date.format("DD/MM/YYYY")}`,
    style: "headerMargin",
    alignment: "center",
    id: shortid.generate(),
  },
];
