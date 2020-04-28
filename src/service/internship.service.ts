import * as Constants from "../electron/ipc/constants";
import { IpcService } from "./ipc.service";
import { IIPCResponse } from "../types/ipc.response.interface";

export class InternshipService {
  private ipcService: IpcService = new IpcService();

  list(): Promise<IIPCResponse<any[]>> {
    const channel = Constants.INTERNSHIP.LIST_INTERNISHIPS;
    const backChannel = Constants.INTERNSHIP.LIST_INTERNISHIPS_RESPONSE;

    return this.ipcService.send(channel, backChannel, null);
  }

  updateBed(id: number, bedId: number): Promise<IIPCResponse<any>> {
    const channel = Constants.INTERNSHIP.UPDATE_BED_CHANNEL;
    const backChannel = Constants.INTERNSHIP.UPDATE_BED_CHANNEL_RESPONSE;
    const data = {
      id,
      data: { bedId },
    };

    return this.ipcService.send(channel, backChannel, data);
  }
}
