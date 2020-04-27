const events = require("events");
const database = require("../database/config");
const initPacientIPC = require("./channels/pacient.channel");
const initBedIPC = require("./channels/bed.channel");

const sequelize = database.sequelize;

events.EventEmitter.defaultMaxListeners = 150;

const initIPC = () => {
  sequelize
    .sync()
    .then(() => {
      initPacientIPC();
      initBedIPC();
    })
    .catch((error) => console.log(error));
};

module.exports = initIPC;
