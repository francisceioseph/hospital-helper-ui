const IPCConstants = require("../../ipc/constants");
const { Bed, Pacient } = require("../config");

class BedController {
  static async listOccupied(event, args) {
    const replayChannel = IPCConstants.BED.LIST_IN_USE_RESPONSE_CHANNEL;
    try {
      let beds = await Bed.findAll({
        include: Pacient,
      });

      beds = beds
        .map((bed) => bed.toJSON())
        .filter((bed) => bed.Pacient !== null);

      event.reply(replayChannel, { data: beds });
    } catch (error) {
      event.reply(replayChannel, {
        error,
        data: null,
      });
    }
  }
}

module.exports = BedController;
