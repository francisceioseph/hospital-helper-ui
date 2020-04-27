const Sequelize = require("sequelize");
const IPCConstants = require("../../ipc/constants");
const { Pacient, Bed, Internship } = require("../config");

class InternshipController {
  static async list(event, args) {
    const replayChannel = IPCConstants.INTERNSHIP.LIST_INTERNISHIPS_RESPONSE;

    try {
      let internships = await Internship.findAll({
        where: {
          endDate: {
            [Sequelize.Op.eq]: null,
          },
        },
        include: [Bed, Pacient],
      });

      internships = internships.map((i) => i.toJSON());

      event.reply(replayChannel, { data: internships });
    } catch (error) {
      event.reply(replayChannel, {
        error,
        data: null,
      });
    }
  }
}

module.exports = InternshipController;
