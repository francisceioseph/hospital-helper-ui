const moment = require("moment");
const shortid = require("shortid");
const basicHeader = require("../basic/header-content");

module.exports = (start, end) => {
  const mStart = moment(start);
  const mEnd = moment(end);

  const diff = mEnd.diff(mStart, "days");

  const startStr = mStart.format("DD/MM/YYYY");
  const endStr = mEnd.format("DD/MM/YYYY");

  const text =
    diff > 0
      ? `RELATÓRIO DE EVOLUÇÕES ${startStr} A ${endStr}`
      : `RELATÓRIO DE EVOLUÇÕES ${startStr}`;

  return [
    ...basicHeader(),
    {
      text,
      style: "headerMargin",
      alignment: "center",
      id: shortid.generate(),
    },
  ];
};
