const electron = require("electron");
const constants = require("../constants");

const PacientController = require("../../database/controllers/pacient.controller");

const ipcMain = electron.ipcMain;

const initPacientIPC = () => {
  ipcMain.on(constants.PACIENT.CREATE_CHANNEL, PacientController.create);
  ipcMain.on(constants.PACIENT.LIST_CHANNEL, PacientController.list);
  ipcMain.on(constants.PACIENT.SHOW_CHANNEL, PacientController.show);
  ipcMain.on(constants.PACIENT.UPDATE_CHANNEL, PacientController.update);
  ipcMain.on(constants.PACIENT.DESTROY_CHANNEL, PacientController.destroy);
};

module.exports = initPacientIPC;
