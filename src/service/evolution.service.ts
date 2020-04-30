import * as Constants from "../electron/ipc/constants";
import { IpcService } from "./ipc.service";
import { IIPCResponse } from "../types/ipc.response.interface";

export class EvolutionService {
  private ipcService: IpcService = new IpcService();

  createEvolution(evolution: any): Promise<IIPCResponse<any>> {
    const channel = Constants.EVOLUTION.CREATE_CHANNEL;
    const backChannel = Constants.EVOLUTION.CREATE_RESPONSE_CHANNEL;

    return this.ipcService.send(channel, backChannel, { data: evolution });
  }

  listEvolution(): Promise<IIPCResponse<any[]>> {
    const channel = Constants.EVOLUTION.LIST_CHANNEL;
    const backChannel = Constants.EVOLUTION.LIST_RESPONSE_CHANNEL;

    return this.ipcService.send(channel, backChannel, null);
  }

  showEvolution(id: number): Promise<IIPCResponse<any>> {
    const channel = Constants.EVOLUTION.SHOW_CHANNEL;
    const backChannel = Constants.EVOLUTION.SHOW_RESPONSE_CHANNEL;

    return this.ipcService.send(channel, backChannel, { id });
  }

  updateEvolution(id: number, evolution: any): Promise<IIPCResponse<any>> {
    const channel = Constants.EVOLUTION.UPDATE_CHANNEL;
    const backChannel = Constants.EVOLUTION.UPDATE_RESPONSE_CHANNEL;

    return this.ipcService.send(channel, backChannel, { id, data: evolution });
  }

  destroyEvolution(id: number): Promise<IIPCResponse<any>> {
    const channel = Constants.EVOLUTION.DESTROY_CHANNEL;
    const backChannel = Constants.EVOLUTION.DESTROY_RESPONSE_CHANNEL;

    return this.ipcService.send(channel, backChannel, { id });
  }
}
