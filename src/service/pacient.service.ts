import * as Constants from "../electron/ipc/constants";
import { IpcService } from "./ipc.service";

export class PacientService {
  private ipcService: IpcService = new IpcService();

  createPacient(pacient: any): Promise<any> {
    const channel = Constants.PACIENT.CREATE_CHANNEL;
    const backChannel = Constants.PACIENT.CREATE_RESPONSE_CHANNEL;

    return this.ipcService.send(channel, backChannel, { data: pacient });
  }

  listPacient(): Promise<any> {
    const channel = Constants.PACIENT.LIST_CHANNEL;
    const backChannel = Constants.PACIENT.LIST_RESPONSE_CHANNEL;

    return this.ipcService.send(channel, backChannel, null);
  }

  showPacient(id: number): Promise<any> {
    const channel = Constants.PACIENT.SHOW_CHANNEL;
    const backChannel = Constants.PACIENT.SHOW_RESPONSE_CHANNEL;

    return this.ipcService.send(channel, backChannel, { id });
  }

  updatePacient(id: number, pacient: any): Promise<any> {
    const channel = Constants.PACIENT.UPDATE_CHANNEL;
    const backChannel = Constants.PACIENT.UPDATE_RESPONSE_CHANNEL;

    return this.ipcService.send(channel, backChannel, { id, data: pacient });
  }

  destroyPacient(id: number): Promise<any> {
    const channel = Constants.PACIENT.DESTROY_CHANNEL;
    const backChannel = Constants.PACIENT.DESTROY_RESPONSE_CHANNEL;

    return this.ipcService.send(channel, backChannel, { id });
  }
}
