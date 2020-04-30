const electron = require("electron");
const constants = require("../constants");

const EvolutionController = require("../../database/controllers/evolution.controller");

const ipcMain = electron.ipcMain;

const initEvolutionIPC = () => {
  ipcMain.on(constants.EVOLUTION.CREATE_CHANNEL, EvolutionController.create);
  ipcMain.on(constants.EVOLUTION.LIST_CHANNEL, EvolutionController.list);
  ipcMain.on(constants.EVOLUTION.SHOW_CHANNEL, EvolutionController.show);
  ipcMain.on(constants.EVOLUTION.UPDATE_CHANNEL, EvolutionController.update);
  ipcMain.on(constants.EVOLUTION.DESTROY_CHANNEL, EvolutionController.destroy);
};

module.exports = initEvolutionIPC;
