import Constants from "../constants/ipc-constants";
import { IpcService } from "./ipc.service";
import { IIPCResponse } from "../types/ipc.response.interface";

export class BedService {
  private ipcService: IpcService = new IpcService();

  listNotInUse(): Promise<IIPCResponse<any[]>> {
    const channel = Constants.BED.LIST_NOT_IN_USE_CHANNEL;
    const backChannel = Constants.BED.LIST_NOT_IN_USE_RESPONSE_CHANNEL;

    return this.ipcService.send(channel, backChannel, null);
  }
}
