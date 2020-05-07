import Constants from "../constants/ipc-constants";
import { IpcService } from "./ipc.service";
import { IIPCResponse } from "../types/ipc.response.interface";
import { IBed } from "../types/models/bed.interface";

export class BedService {
  private ipcService: IpcService = new IpcService();

  createBed(evolution: any): Promise<IIPCResponse<IBed>> {
    const channel = Constants.BED.CREATE_CHANNEL;
    const backChannel = Constants.BED.CREATE_RESPONSE_CHANNEL;

    return this.ipcService.send(channel, backChannel, { data: evolution });
  }

  listBeds(): Promise<IIPCResponse<IBed[]>> {
    const channel = Constants.BED.LIST_CHANNEL;
    const backChannel = Constants.BED.LIST_RESPONSE_CHANNEL;

    return this.ipcService.send(channel, backChannel, null);
  }

  listNotInUse(): Promise<IIPCResponse<IBed[]>> {
    const channel = Constants.BED.LIST_NOT_IN_USE_CHANNEL;
    const backChannel = Constants.BED.LIST_NOT_IN_USE_RESPONSE_CHANNEL;

    return this.ipcService.send(channel, backChannel, null);
  }

  showBed(id: number): Promise<IIPCResponse<IBed>> {
    const channel = Constants.BED.SHOW_CHANNEL;
    const backChannel = Constants.BED.SHOW_CHANNEL_RESPONSE;

    return this.ipcService.send(channel, backChannel, { id });
  }

  updateBed(id: number, evolution: any): Promise<IIPCResponse<IBed>> {
    const channel = Constants.BED.UPDATE_CHANNEL;
    const backChannel = Constants.BED.UPDATE_RESPONSE_CHANNEL;

    return this.ipcService.send(channel, backChannel, { id, data: evolution });
  }

  destroyBed(id: number): Promise<IIPCResponse<any>> {
    const channel = Constants.BED.DESTROY_RESPONSE_CHANNEL;
    const backChannel = Constants.BED.DESTROY_RESPONSE_CHANNEL;

    return this.ipcService.send(channel, backChannel, { id });
  }
}
