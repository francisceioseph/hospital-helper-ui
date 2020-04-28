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

  static async update(event, args) {
    const { data, id } = args;
    const replayChannel = IPCConstants.INTERNSHIP.UPDATE_CHANNEL_RESPONSE;

    try {
      await Internship.update(data, {
        where: {
          id: id,
        },
      });

      const internship = await Internship.findOne({
        where: {
          id: id,
        },
      });

      event.reply(replayChannel, { data: internship });
    } catch (error) {
      event.reply(replayChannel, {
        error,
        data: null,
      });
    }
  }
}

module.exports = InternshipController;
