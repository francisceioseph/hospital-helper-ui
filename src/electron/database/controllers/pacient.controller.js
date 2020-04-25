const IPCConstants = require("../../ipc/constants");
const Pacient = require("../models/pacient.model");

class PacientController {
  async create(event, args) {
    const replayChannel = IPCConstants.PACIENT.CREATE_RESPONSE_CHANNEL;

    try {
      const pacient = await Pacient.create(args.data);
      event.reply(replayChannel, {
        data: pacient.get({ plain: true }),
      });
    } catch (error) {
      event.replay(replayChannel, {
        error,
        data: null,
      });
    }
  }

  async list(event, args) {
    const replayChannel = IPCConstants.PACIENT.LIST_RESPONSE_CHANNEL;

    try {
      const pacients = await Pacient.findAll({ plain: true });
      event.replay(replayChannel, { data: pacients });
    } catch (error) {
      event.replay(replayChannel, {
        error,
        data: null,
      });
    }
  }

  async show(event, args) {
    const replayChannel = IPCConstants.PACIENT.SHOW_RESPONSE_CHANNEL;

    try {
      const pacient = await Pacient.findOne({
        where: { id: args.data.id },
        plain: true,
      });

      event.replay(replayChannel, { data: pacient });
    } catch (error) {
      event.replay(replayChannel, {
        error,
        data: null,
      });
    }
  }

  async update(event, args) {
    const replayChannel = IPCConstants.PACIENT.UPDATE_RESPONSE_CHANNEL;

    try {
      const pacient = await Pacient.update(args.data, {
        where: args.data.id,
        returning: true,
        plain: true,
      });
      event.replay(replayChannel, { data: pacient });
    } catch (error) {
      event.replay(replayChannel, {
        error,
        data: null,
      });
    }
  }

  async destroy(event, args) {
    const replayChannel = IPCConstants.PACIENT.DESTROY_RESPONSE_CHANNEL;

    try {
      await Pacient.destroy({
        where: args.data.id,
      });

      event.replay(replayChannel, { data: {} });
    } catch (error) {
      event.replay(replayChannel, {
        error,
        data: null,
      });
    }
  }
}

module.exports = PacientController;
