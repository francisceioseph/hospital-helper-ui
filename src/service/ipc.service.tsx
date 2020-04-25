const { ipcRenderer } = window.require("electron");

export class IpcService {
  get ipc() {
    return ipcRenderer;
  }

  send(channel: string, backChannel: string, data: any): Promise<any> {
    ipcRenderer.send(channel, data);
    return this.listen(backChannel);
  }

  listen(channel: string): Promise<any> {
    return new Promise((resolve, reject) => {
      ipcRenderer.once(channel, (_, data) => {
        if (data.error) {
          return reject(data);
        }

        return resolve(data);
      });
    });
  }
}
