const { app, BrowserWindow } = require("electron");

const path = require("path");
const url = require("url");
const initIPC = require("./electron/ipc/config");
const MenuBuilder = require("./electron/utils/menu");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  console.log("===> NODE ENV <===: ", process.env.NODE_ENV);

  if (process.env.NODE_ENV === "development") {
    mainWindow.loadURL(process.env.ELECTRON_START_DEV_URL);
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, "./index.html"),
        protocol: "file:",
        slashes: true,
      })
    );

    const menuBuilder = new MenuBuilder(mainWindow);
    menuBuilder.buildMenu();
  }

  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  initIPC();
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
