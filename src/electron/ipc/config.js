const events = require("events");
const database = require("../database/config");

const initPacientIPC = require("./channels/pacient.channel");
const initEvolutionIPC = require("./channels/evolution.channel");
const initInternshipsIPC = require("./channels/internship.channel");
const initBedIPC = require("./channels/bed.channel");
const initPDFChannels = require("./channels/pdf.channel");

const sequelize = database.sequelize;

events.EventEmitter.defaultMaxListeners = 150;

const initIPC = () => {
  sequelize
    .sync()
    .then(() => {
      initBedIPC();
      initPacientIPC();
      initInternshipsIPC();
      initEvolutionIPC();
      initPDFChannels();
    })
    .catch((error) => console.log(error));
};

module.exports = initIPC;
