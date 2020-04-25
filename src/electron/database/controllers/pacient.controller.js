const IPCConstants = require("../../ipc/constants");
const { Pacient } = require("../config");

class PacientController {
  static async create(event, args) {
    console.log("hey");
    console.log(JSON.stringify(args.data));
    const replayChannel = IPCConstants.PACIENT.CREATE_RESPONSE_CHANNEL;

    try {
      const pacient = await Pacient.create(args.data);
      event.reply(replayChannel, {
        data: pacient.get({ plain: true }),
      });
    } catch (error) {
      console.error(error);
      event.reply(replayChannel, {
        error,
        data: null,
      });
    }
  }

  static async list(event, args) {
    const replayChannel = IPCConstants.PACIENT.LIST_RESPONSE_CHANNEL;

    try {
      const pacients = await Pacient.findAll({ plain: true });
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
        plain: true,
      });

      event.reply(replayChannel, { data: pacient });
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
        where: args.data.id,
        returning: true,
        plain: true,
      });
      event.reply(replayChannel, { data: pacient });
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
