import * as Constants from "../electron/ipc/constants";
import { IpcService } from "./ipc.service";
import { IIPCResponse } from "../types/ipc.response.interface";
import { IInternship } from "../types/models/internship.interface";

export class InternshipService {
  private ipcService: IpcService = new IpcService();

  list(): Promise<IIPCResponse<any[]>> {
    const channel = Constants.INTERNSHIP.LIST_INTERNSHIPS;
    const backChannel = Constants.INTERNSHIP.LIST_INTERNSHIPS_RESPONSE;

    return this.ipcService.send(channel, backChannel, null);
  }

  show(id: number): Promise<IIPCResponse<IInternship>> {
    const channel = Constants.INTERNSHIP.SHOW_INTERNSHIP_CHANNEL;
    const backChannel = Constants.INTERNSHIP.SHOW_INTERNSHIP_RESPONSE_CHANNEL;
    const args = {
      id,
    };

    return this.ipcService.send(channel, backChannel, args);
  }

  update(id: number, data: any): Promise<IIPCResponse<any>> {
    const channel = Constants.INTERNSHIP.UPDATE_CHANNEL;
    const backChannel = Constants.INTERNSHIP.UPDATE_CHANNEL_RESPONSE;
    const args = {
      id,
      data,
    };

    return this.ipcService.send(channel, backChannel, args);
  }
}
