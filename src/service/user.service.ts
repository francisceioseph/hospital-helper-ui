import Constants from "../constants/ipc-constants";
import { IpcService } from "./ipc.service";
import { IIPCResponse } from "../types/ipc.response.interface";

export class UserService {
  private ipcService: IpcService = new IpcService();

  authtenticateUser(user: any): Promise<IIPCResponse<any>> {
    const channel = Constants.USER.AUTH_CHANNEL;
    const backChannel = Constants.USER.AUTH_RESPONSE_CHANNEL;

    return this.ipcService.send(channel, backChannel, { data: user });
  }

  createUser(user: any): Promise<IIPCResponse<any>> {
    const channel = Constants.USER.CREATE_CHANNEL;
    const backChannel = Constants.USER.CREATE_RESPONSE_CHANNEL;

    return this.ipcService.send(channel, backChannel, { data: user });
  }

  listUser(): Promise<IIPCResponse<any[]>> {
    const channel = Constants.USER.LIST_CHANNEL;
    const backChannel = Constants.USER.LIST_RESPONSE_CHANNEL;

    return this.ipcService.send(channel, backChannel, null);
  }

  showUser(id: number): Promise<IIPCResponse<any>> {
    const channel = Constants.USER.SHOW_CHANNEL;
    const backChannel = Constants.USER.SHOW_RESPONSE_CHANNEL;

    return this.ipcService.send(channel, backChannel, { id });
  }

  updateUser(id: number, user: any): Promise<IIPCResponse<any>> {
    const channel = Constants.USER.UPDATE_CHANNEL;
    const backChannel = Constants.USER.UPDATE_RESPONSE_CHANNEL;

    return this.ipcService.send(channel, backChannel, { id, data: user });
  }

  destroyUser(id: number): Promise<IIPCResponse<any>> {
    const channel = Constants.USER.DESTROY_CHANNEL;
    const backChannel = Constants.USER.DESTROY_RESPONSE_CHANNEL;

    return this.ipcService.send(channel, backChannel, { id });
  }
}
