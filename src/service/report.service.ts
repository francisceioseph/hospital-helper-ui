import * as Constants from "../electron/ipc/constants";
import { IpcService } from "./ipc.service";
import { IIPCResponse } from "../types/ipc.response.interface";

export class ReportService {
  private ipcService: IpcService = new IpcService();

  reportPacientEvolutions(
    internshipId: number,
    startDate: Date,
    endDate: Date
  ): Promise<IIPCResponse<any[]>> {
    const channel = Constants.PDF.REPORT_PACIENT_EVOLUTION;
    const backChannel = Constants.PDF.PRINT_PACIENT_EVOLUTION_RESPONSE;

    const args = {
      internshipId,
      startDate,
      endDate,
    };

    return this.ipcService.send(channel, backChannel, args);
  }
}
