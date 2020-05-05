const sequelize = require("sequelize");
const moment = require("moment");

const Constants = require("../ipc/constants");
const { Evolution, Internship, Pacient } = require("../database/config");

require("moment/locale/pt-br");

const printPdf = require("./basic/print-pdf");

const {
  pacientNameField,
  dateField,
  authorField,
  typeField,
  textField,
} = require("./evolutions/table-components");

const pageHeader = require("./evolutions/page-header");
const pageStyles = require("./evolutions/page-styles");

const getDate = (dateStr) => {
  const date = !!dateStr ? moment(dateStr) : moment();
  const startDate = moment(date).hour(0).minutes(0).seconds(0).milliseconds(0);
  const endDate = moment(date)
    .hour(23)
    .minutes(59)
    .seconds(59)
    .milliseconds(999);

  return [date, startDate, endDate];
};

const createEvolutionsPDF = async (event, args) => {
  const { dateStr } = args;
  const [date, startDate, endDate] = getDate(dateStr);
  const header = pageHeader(date);

  const document = {
    content: [...header],
    pageSize: "A4",
    styles: pageStyles,
    defaultStyle: {
      font: "Courier",
    },
  };

  const replyChannel = Constants.PDF.PRINT_EVOLUTIONS_RESPONSE;

  try {
    const result = await Evolution.findAll({
      where: {
        createdAt: {
          [sequelize.Op.between]: [startDate, endDate],
        },
      },
      include: [{ model: Internship, include: [Pacient] }],
      order: [
        [Internship, { model: Pacient }, "fullName", "ASC"],
        ["createdAt", "DESC"],
      ],
    });

    const evolutions = result
      .map((r) => r.toJSON())
      .reduce((acc, evolution, index, jsons) => {
        let body = [];
        let breakPage = false;

        if (index > 0) {
          const previous = jsons[index - 1];

          if (previous.internshipId !== evolution.internshipId) {
            breakPage = true;
            body = [
              pacientNameField(evolution),
              dateField(evolution),
              typeField(evolution),
              authorField(evolution),
            ];
          } else {
            breakPage = false;

            body = [
              dateField(evolution),
              typeField(evolution),
              authorField(evolution),
            ];
          }
        } else {
          breakPage = false;
          body = [
            pacientNameField(evolution),
            dateField(evolution),
            typeField(evolution),
            authorField(evolution),
          ];
        }

        const table = {
          layout: "clean",
          table: {
            headerRows: 0,
            widths: ["33%", "66%"],
            body: body,
          },
        };

        return breakPage
          ? [
              ...acc,
              { text: " ", pageBreak: "after" },
              pageHeader(date),
              table,
              ...textField(evolution),
            ]
          : [...acc, table, ...textField(evolution)];
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

module.exports = createEvolutionsPDF;
