const path = require("path");
const os = require("os");
const fs = require("fs");
const { shell } = require("electron");

const tableLayouts = require("./table-layouts");
const fonts = require("../fonts-config");

module.exports = (document) => {
  const PdfPrinter = require("pdfmake");
  const printer = new PdfPrinter(fonts);
  const pdfDoc = printer.createPdfKitDocument(document, {
    tableLayouts: tableLayouts,
  });

  const pdfPath = path.join(os.tmpdir(), `print_${Date.now()}.pdf`);
  pdfDoc.pipe(fs.createWriteStream(pdfPath));
  pdfDoc.end();

  shell.openExternal(`file://${pdfPath}`);
};
