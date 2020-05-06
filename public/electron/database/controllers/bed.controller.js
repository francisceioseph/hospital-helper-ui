const Sequelize = require("sequelize");
const IPCConstants = require("../../ipc/constants");
const { Bed, Internship } = require("../config");

class BedController {
  static async listNotInUse(event, args) {
    const replayChannel = IPCConstants.BED.LIST_NOT_IN_USE_RESPONSE_CHANNEL;
    try {
      let internships = await Internship.findAll({
        where: {
          endDate: {
            [Sequelize.Op.eq]: null,
          },
        },
      });

      internships = internships.map((i) => i.toJSON().bedId);

      let beds = await Bed.findAll({
        where: { id: { [Sequelize.Op.notIn]: internships } },
      });

      beds = beds.map((bed) => bed.toJSON());

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
