const IPCConstants = require("../../ipc/constants");
const { Evolution } = require("../config");

class EvolutionController {
  static async create(event, args) {
    const replayChannel = IPCConstants.EVOLUTION.CREATE_RESPONSE_CHANNEL;

    try {
      const { data: evolutionData } = args;
      const evolution = await Evolution.create(evolutionData);

      event.reply(replayChannel, {
        data: evolution.toJSON(),
      });
    } catch (error) {
      event.reply(replayChannel, {
        error,
        data: null,
      });
    }
  }

  static async list(event, args) {
    const replayChannel = IPCConstants.EVOLUTION.LIST_RESPONSE_CHANNEL;

    try {
      const query = await Evolution.findAll({
        order: [["createdAt", "DESC"]],
      });

      const evolutions = query.map((result) => result.toJSON());

      event.reply(replayChannel, { data: evolutions });
    } catch (error) {
      event.reply(replayChannel, {
        error,
        data: null,
      });
    }
  }

  static async show(event, args) {
    const replayChannel = IPCConstants.EVOLUTION.SHOW_RESPONSE_CHANNEL;

    try {
      const evolution = await Evolution.findOne({
        where: { id: args.data.id },
      });

      event.reply(replayChannel, { data: evolution.toJSON() });
    } catch (error) {
      event.reply(replayChannel, {
        error,
        data: null,
      });
    }
  }

  static async update(event, args) {
    const replayChannel = IPCConstants.EVOLUTION.UPDATE_RESPONSE_CHANNEL;

    try {
      const evolution = await Evolution.update(args.data, {
        where: { id: args.data.id },
        returning: true,
      });
      event.reply(replayChannel, { data: evolution.toJSON() });
    } catch (error) {
      event.reply(replayChannel, {
        error,
        data: null,
      });
    }
  }

  static async destroy(event, args) {
    const replayChannel = IPCConstants.EVOLUTION.DESTROY_RESPONSE_CHANNEL;

    try {
      await Evolution.destroy({
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

module.exports = EvolutionController;
