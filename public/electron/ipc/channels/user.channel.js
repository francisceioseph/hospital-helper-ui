const electron = require("electron");
const constants = require("../constants");

const UserController = require("../../database/controllers/user.controller");

const ipcMain = electron.ipcMain;

const initUserIPC = () => {
  ipcMain.on(constants.USER.AUTH_CHANNEL, UserController.authenticate);
  ipcMain.on(constants.USER.CREATE_CHANNEL, UserController.create);
  ipcMain.on(constants.USER.LIST_CHANNEL, UserController.list);
  ipcMain.on(constants.USER.SHOW_CHANNEL, UserController.show);
  ipcMain.on(constants.USER.UPDATE_CHANNEL, UserController.update);
  ipcMain.on(constants.USER.DESTROY_CHANNEL, UserController.destroy);
};

module.exports = initUserIPC;
