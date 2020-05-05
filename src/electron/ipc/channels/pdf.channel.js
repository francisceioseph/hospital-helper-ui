const electron = require("electron");
const Constants = require("../constants");

const reportEvolutions = require("../../pdf/report-evolutions");
const reportPacientEvolution = require("../../pdf/report-pacient-evolution");

const ipcMain = electron.ipcMain;

const initPDFChannels = () => {
  ipcMain.on(Constants.PDF.REPORT_EVOLUTIONS, reportEvolutions);
  ipcMain.on(Constants.PDF.REPORT_PACIENT_EVOLUTION, reportPacientEvolution);
};

module.exports = initPDFChannels;
