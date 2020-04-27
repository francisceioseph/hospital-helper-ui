const electron = require("electron");
const constants = require("../constants");

const BedController = require("../../database/controllers/bed.controller");

const ipcMain = electron.ipcMain;

const initBedIPC = () => {
  ipcMain.on(constants.BED.LIST_IN_USE_CHANNEL, BedController.listOccupied);
};

module.exports = initBedIPC;
