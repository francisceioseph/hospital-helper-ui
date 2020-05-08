const events = require("events");
const database = require("../database/config");
const seedData = require("../database/seed");

const initPacientIPC = require("./channels/pacient.channel");
const initEvolutionIPC = require("./channels/evolution.channel");
const initInternshipsIPC = require("./channels/internship.channel");
const initBedIPC = require("./channels/bed.channel");
const initPDFChannels = require("./channels/pdf.channel");
const initUserChannels = require("./channels/user.channel");

const sequelize = database.sequelize;

events.EventEmitter.defaultMaxListeners = 150;

const initIPC = () => {
  sequelize
    .sync()
    .then(() => {
      console.log("SYNC RESOLVES");
      return seedData();
    })
    .then(() => {
      console.log("SEED RESOLVES");
      initBedIPC();
      initPacientIPC();
      initInternshipsIPC();
      initEvolutionIPC();
      initPDFChannels();
      initUserChannels();
    })
    .catch((error) => console.log(error));
};

module.exports = initIPC;
