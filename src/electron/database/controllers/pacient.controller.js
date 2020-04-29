const IPCConstants = require("../../ipc/constants");
const { Pacient, Internship } = require("../config");

class PacientController {
  static async create(event, args) {
    const replayChannel = IPCConstants.PACIENT.CREATE_RESPONSE_CHANNEL;

    try {
      const { bed_id, ...pacientData } = args.data;
      const pacient = await Pacient.create(pacientData);

      await Internship.create({
        pacientId: pacient.id,
        bedId: bed_id,
        startDate: new Date(),
      });

      event.reply(replayChannel, {
        data: pacient.toJSON(),
      });
    } catch (error) {
      event.reply(replayChannel, {
        error,
        data: null,
      });
    }
  }

  static async list(event, args) {
    const replayChannel = IPCConstants.PACIENT.LIST_RESPONSE_CHANNEL;

    try {
      const query = await Pacient.findAll({
        order: [["fullName", "ASC"]],
      });
      const pacients = query.map((result) => result.toJSON());

      event.reply(replayChannel, { data: pacients });
    } catch (error) {
      event.reply(replayChannel, {
        error,
        data: null,
      });
    }
  }

  static async show(event, args) {
    const replayChannel = IPCConstants.PACIENT.SHOW_RESPONSE_CHANNEL;

    try {
      const pacient = await Pacient.findOne({
        where: { id: args.data.id },
      });

      event.reply(replayChannel, { data: pacient.toJSON() });
    } catch (error) {
      event.reply(replayChannel, {
        error,
        data: null,
      });
    }
  }

  static async update(event, args) {
    const replayChannel = IPCConstants.PACIENT.UPDATE_RESPONSE_CHANNEL;

    try {
      const pacient = await Pacient.update(args.data, {
        where: { id: args.data.id },
        returning: true,
      });
      event.reply(replayChannel, { data: pacient.toJSON() });
    } catch (error) {
      event.reply(replayChannel, {
        error,
        data: null,
      });
    }
  }

  static async destroy(event, args) {
    const replayChannel = IPCConstants.PACIENT.DESTROY_RESPONSE_CHANNEL;

    try {
      await Pacient.destroy({
        where: args.data.id,
      });

      event.reply(replayChannel, { data: {} });
    } catch (error) {
      event.reply(replayChannel, {
        error,
        data: null,
      });
    }
  }
}

module.exports = PacientController;
