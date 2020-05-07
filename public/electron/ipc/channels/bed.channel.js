const electron = require("electron");
const constants = require("../constants");

const BedController = require("../../database/controllers/bed.controller");

const ipcMain = electron.ipcMain;

const initBedIPC = () => {
  ipcMain.on(constants.BED.CREATE_CHANNEL, BedController.create);
  ipcMain.on(constants.BED.LIST_CHANNEL, BedController.list);
  ipcMain.on(constants.BED.SHOW_CHANNEL, BedController.show);
  ipcMain.on(constants.BED.UPDATE_CHANNEL, BedController.update);
  ipcMain.on(constants.BED.DESTROY_CHANNEL, BedController.destroy);
  ipcMain.on(constants.BED.LIST_NOT_IN_USE_CHANNEL, BedController.listNotInUse);
};

module.exports = initBedIPC;
