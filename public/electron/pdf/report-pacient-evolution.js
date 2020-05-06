const sequelize = require("sequelize");
const moment = require("moment");
const shortid = require("shortid");
require("moment/locale/pt-br");

const { Evolution, Internship, Pacient } = require("../database/config");

const {
  pacientNameField,
  dateField,
  authorField,
  typeField,
  textField,
} = require("./evolutions/table-components");

const Constants = require("../ipc/constants");
const printPdf = require("./basic/print-pdf");
const pageHeader = require("./pacient-evolution/page-header");
const pageStyles = require("./evolutions/page-styles");

const getDate = (startDate, endDate) => {
  const start = moment(startDate).hour(0).minutes(0).seconds(0).milliseconds(0);
  const end = moment(endDate)
    .hour(23)
    .minutes(59)
    .seconds(59)
    .milliseconds(999);

  return [start, end];
};

const reportPacientEvolution = async (event, args) => {
  const { internshipId, startDate, endDate } = args;

  const [start, end] = getDate(startDate, endDate);
  const header = pageHeader(start, end);

  const document = {
    content: [...header],
    pageSize: "A4",
    styles: pageStyles,
    defaultStyle: {
      font: "Courier",
    },
  };

  const replyChannel = Constants.PDF.PRINT_PACIENT_EVOLUTION_RESPONSE;

  try {
    const result = await Evolution.findAll({
      where: {
        internshipId,
        createdAt: {
          [sequelize.Op.between]: [start, end],
        },
      },
      include: [{ model: Internship, include: [Pacient] }],
      order: [["createdAt", "DESC"]],
    });

    const evolutions = result
      .map((r) => r.toJSON())
      .reduce((acc, evolution, index) => {
        let body = [];

        if (index === 0) {
          body = [
            pacientNameField(evolution),
            dateField(evolution),
            typeField(evolution),
            authorField(evolution),
          ];
        } else {
          body = [
            dateField(evolution),
            typeField(evolution),
            authorField(evolution),
          ];
        }

        const table = {
          id: shortid.generate(),
          layout: "clean",
          table: {
            id: shortid.generate(),
            headerRows: 0,
            widths: ["25%", "75%"],
            body: body,
          },
        };

        return [...acc, table, ...textField(evolution)];
      }, []);

    document.content = [...document.content, ...evolutions];

    printPdf(document);

    event.reply(replyChannel, {
      data: evolutions,
    });
  } catch (error) {
    event.reply(replyChannel, {
      error,
      data: null,
    });
  }
};

module.exports = reportPacientEvolution;
