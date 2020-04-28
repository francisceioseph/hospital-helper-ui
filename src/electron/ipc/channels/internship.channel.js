const electron = require("electron");
const constants = require("../constants");

const InternshipController = require("../../database/controllers/internships.controller");

const ipcMain = electron.ipcMain;

const initInternshipsIPC = () => {
  ipcMain.on(constants.INTERNSHIP.LIST_INTERNISHIPS, InternshipController.list);
  ipcMain.on(constants.INTERNSHIP.UPDATE_CHANNEL, InternshipController.update);
};

module.exports = initInternshipsIPC;
