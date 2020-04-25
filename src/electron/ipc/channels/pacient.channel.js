const electron = require("electron");
const constants = require("../constants");

const PacientController = require("../../database/controllers/pacient.controller");

const ipcMain = electron.ipcMain;

const initPacientIPC = () => {
  const controller = new PacientController();

  ipcMain.on(constants.PACIENT.CREATE_CHANNEL, controller.create);
  ipcMain.on(constants.PACIENT.LIST_CHANNEL, controller.list);
  ipcMain.on(constants.PACIENT.SHOW_CHANNEL, controller.show);
  ipcMain.on(constants.PACIENT.UPDATE_CHANNEL, controller.update);
  ipcMain.on(constants.PACIENT.DESTROY_CHANNEL, controller.destroy);
};

module.exports = initPacientIPC;
