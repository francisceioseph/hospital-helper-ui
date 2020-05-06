const IPCConstants = require("../../ipc/constants");
const { Pacient, Internship } = require("../config");
const toSearchRegex = require("../../utils/toSearchRegex");

class PacientController {
  static async create(event, args) {
    const replayChannel = IPCConstants.PACIENT.CREATE_RESPONSE_CHANNEL;

    try {
      const { bed_id, ...pacientData } = args.data;
      const pacient = await Pacient.create(pacientData);

      if (pacient.bed_id) {
        await Internship.create({
          pacientId: pacient.id,
          bedId: bed_id,
          startDate: new Date(),
        });
      }

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

  static async search(event, args) {
    const { fieldName, value } = args;
    const replayChannel = IPCConstants.PACIENT.SEARCH_RESPONSE_CHANNEL;

    const regex = toSearchRegex(value);

    try {
      const query = await Pacient.findAll({
        order: [["fullName", "ASC"]],
      });

      const pacients = query
        .map((result) => result.toJSON())
        .filter((result) => result[fieldName].match(regex));

      event.reply(replayChannel, { data: pacients });
    } catch (error) {
      event.reply(replayChannel, {
        error,
        data: null,
      });
    }
  }

  static async show(event, args) {
    const { id } = args;
    const replayChannel = IPCConstants.PACIENT.SHOW_RESPONSE_CHANNEL;

    try {
      const pacient = await Pacient.findOne({
        where: { id: id },
        include: [Internship],
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
    const { data, id } = args;
    const replayChannel = IPCConstants.PACIENT.UPDATE_RESPONSE_CHANNEL;

    try {
      const pacient = await Pacient.update(data, {
        where: { id: id },
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
    const { id } = args;
    const replayChannel = IPCConstants.PACIENT.DESTROY_RESPONSE_CHANNEL;

    try {
      await Pacient.destroy({
        where: id,
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
