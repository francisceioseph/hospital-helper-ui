import Constants from "../constants/ipc-constants";
import { IpcService } from "./ipc.service";
import { IIPCResponse } from "../types/ipc.response.interface";
import { IPacient } from "../types/models/pacient.interface";

export class PacientService {
  private ipcService: IpcService = new IpcService();

  createPacient(pacient: any): Promise<IIPCResponse<any>> {
    const channel = Constants.PACIENT.CREATE_CHANNEL;
    const backChannel = Constants.PACIENT.CREATE_RESPONSE_CHANNEL;

    return this.ipcService.send(channel, backChannel, { data: pacient });
  }

  listPacient(): Promise<IIPCResponse<any[]>> {
    const channel = Constants.PACIENT.LIST_CHANNEL;
    const backChannel = Constants.PACIENT.LIST_RESPONSE_CHANNEL;

    return this.ipcService.send(channel, backChannel, null);
  }
  searchPacient(value: string): Promise<IIPCResponse<IPacient[]>> {
    const channel = Constants.PACIENT.SEARCH_CHANNEL;
    const backChannel = Constants.PACIENT.SEARCH_RESPONSE_CHANNEL;

    const args = {
      fieldName: "fullName",
      value,
    };

    return this.ipcService.send(channel, backChannel, args);
  }

  showPacient(id: number): Promise<IIPCResponse<any>> {
    const channel = Constants.PACIENT.SHOW_CHANNEL;
    const backChannel = Constants.PACIENT.SHOW_RESPONSE_CHANNEL;

    return this.ipcService.send(channel, backChannel, { id });
  }

  updatePacient(id: number, pacient: any): Promise<IIPCResponse<any>> {
    const channel = Constants.PACIENT.UPDATE_CHANNEL;
    const backChannel = Constants.PACIENT.UPDATE_RESPONSE_CHANNEL;

    return this.ipcService.send(channel, backChannel, { id, data: pacient });
  }

  destroyPacient(id: number): Promise<IIPCResponse<any>> {
    const channel = Constants.PACIENT.DESTROY_CHANNEL;
    const backChannel = Constants.PACIENT.DESTROY_RESPONSE_CHANNEL;

    return this.ipcService.send(channel, backChannel, { id });
  }
}
