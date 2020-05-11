const Sequelize = require("sequelize");
const IPCConstants = require("../../ipc/constants");
const { Bed, Internship } = require("../config");

class BedController {
  static async create(event, args) {
    const replayChannel = IPCConstants.BED.CREATE_RESPONSE_CHANNEL;

    try {
      const { data: bedData } = args;
      const bed = await Bed.create(bedData);

      await bed.reload({ include: [Internship] });

      event.reply(replayChannel, {
        data: bed.toJSON(),
      });
    } catch (error) {
      event.reply(replayChannel, {
        error,
        data: null,
      });
    }
  }

  static async list(event, args) {
    const replayChannel = IPCConstants.BED.LIST_RESPONSE_CHANNEL;

    try {
      const results = await Bed.findAll({
        include: [
          {
            model: Internship,
          },
        ],
        order: [["name", "ASC"]],
      });

      const beds = results.map((result) => {
        const bed = result.toJSON();

        bed.Internships = bed.Internships.filter(
          (internship) => internship.endDate === null
        );

        return bed;
      });

      event.reply(replayChannel, { data: beds });
    } catch (error) {
      event.reply(replayChannel, {
        error,
        data: null,
      });
    }
  }

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
        order: [["name", "ASC"]],
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

  static async show(event, args) {
    const replayChannel = IPCConstants.BED.SHOW_RESPONSE_CHANNEL;

    try {
      const bed = await Bed.findOne({
        where: { id: args.id },
        include: [Internship],
      });

      event.reply(replayChannel, { data: bed.toJSON() });
    } catch (error) {
      event.reply(replayChannel, {
        error,
        data: null,
      });
    }
  }

  static async update(event, args) {
    const replayChannel = IPCConstants.BED.UPDATE_RESPONSE_CHANNEL;

    try {
      await Bed.update(args.data, {
        where: { id: args.id },
        returning: true,
      });

      const bed = await Bed.findOne({
        where: { id: args.id },
        include: [Internship],
      });
      event.reply(replayChannel, { data: bed.toJSON() });
    } catch (error) {
      event.reply(replayChannel, {
        error,
        data: null,
      });
    }
  }

  static async destroy(event, args) {
    const replayChannel = IPCConstants.BED.DESTROY_RESPONSE_CHANNEL;

    try {
      await Bed.destroy({
        where: args.id,
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

module.exports = BedController;
