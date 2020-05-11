const Sequelize = require("sequelize");
const IPCConstants = require("../../ipc/constants");
const { Pacient, Bed, Internship, Evolution } = require("../config");

class InternshipController {
  static async create(event, args) {
    const { pacientId, bedId } = args.data;

    const replayChannel = IPCConstants.INTERNSHIP.CREATE_CHANNEL;

    try {
      let internship = await Internship.findOne({
        where: {
          pacientId,
          endDate: {
            [Sequelize.Op.eq]: null,
          },
        },
      });

      if (internship === null) {
        internship = await Internship.create({
          pacientId,
          bedId,
          startDate: new Date(),
        });

        event.reply(replayChannel, { data: internship });
      } else {
        throw new Error("Paciente já está interndo");
      }
    } catch (error) {
      event.reply(replayChannel, {
        error,
        data: null,
      });
    }
  }

  static async list(event, args) {
    const replayChannel = IPCConstants.INTERNSHIP.LIST_INTERNSHIPS_RESPONSE;

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

  static async show(event, args) {
    const { id } = args;
    const replayChannel =
      IPCConstants.INTERNSHIP.SHOW_INTERNSHIP_RESPONSE_CHANNEL;

    const internship = await Internship.findOne({
      where: {
        id: id,
      },
      order: [[Evolution, "createdAt", "desc"]],
      include: [Bed, Pacient, Evolution],
    });

    event.reply(replayChannel, { data: internship.toJSON() });

    try {
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

      event.reply(replayChannel, { data: internship.toJSON() });
    } catch (error) {
      event.reply(replayChannel, {
        error,
        data: null,
      });
    }
  }
}

module.exports = InternshipController;
