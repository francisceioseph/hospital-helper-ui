const electron = require("electron");
const constants = require("../constants");

const createEvolutionsPDF = require("../../pdf/pdf-evolutions-by-pacient");

const ipcMain = electron.ipcMain;

const initPDFChannels = () => {
  ipcMain.on(constants.PDF.PRINT_EVOLUTIONS, createEvolutionsPDF);
};

module.exports = initPDFChannels;
