const bcrypt = require("bcrypt");

const IPCConstants = require("../../ipc/constants");
const { User } = require("../config");

const salt = 10;

const getUserData = async (args) => {
  if (args.data.password) {
    const password = bcrypt.hashSync(args.data.password, salt);
    return {
      ...args.data,
      password,
    };
  }

  return args.data;
};

class UserController {
  static async authenticate(event, args) {
    const replayChannel = IPCConstants.USER.AUTH_RESPONSE_CHANNEL;

    try {
      const { username, password } = args.data;
      const user = await User.findOne({
        where: { username },
      });

      const isEqual = bcrypt.compareSync(password, user.password);

      if (isEqual) {
        event.reply(replayChannel, {
          data: { logged: true },
        });
      } else {
        event.reply(replayChannel, {
          error: { code: 404, message: "incorrect password" },
          data: null,
        });
      }
    } catch (error) {
      event.reply(replayChannel, {
        error,
        data: null,
      });
    }
  }

  static async create(event, args) {
    const replayChannel = IPCConstants.USER.CREATE_RESPONSE_CHANNEL;

    try {
      const userData = await getUserData(args);
      const user = await User.create(userData);

      event.reply(replayChannel, {
        data: user.toJSON(),
      });
    } catch (error) {
      event.reply(replayChannel, {
        error,
        data: null,
      });
    }
  }

  static async list(event, args) {
    const replayChannel = IPCConstants.USER.LIST_RESPONSE_CHANNEL;

    try {
      const query = await User.findAll({
        attributes: ["name", "username"],
        order: [["createdAt", "DESC"]],
      });

      const users = query.map((result) => result.toJSON());

      event.reply(replayChannel, { data: users });
    } catch (error) {
      event.reply(replayChannel, {
        error,
        data: null,
      });
    }
  }

  static async show(event, args) {
    const replayChannel = IPCConstants.USER.SHOW_RESPONSE_CHANNEL;

    try {
      const user = await User.findOne({
        attributes: ["name", "username"],
        where: { id: args.id },
      });

      event.reply(replayChannel, { data: user.toJSON() });
    } catch (error) {
      event.reply(replayChannel, {
        error,
        data: null,
      });
    }
  }

  static async update(event, args) {
    const replayChannel = IPCConstants.USER.UPDATE_RESPONSE_CHANNEL;

    try {
      const userData = await getUserData(args);

      await User.update(userData, {
        where: { id: args.id },
        returning: true,
      });

      const user = await User.findOne({
        attributes: ["name", "username"],
        where: { id: args.id },
      });

      event.reply(replayChannel, { data: user.toJSON() });
    } catch (error) {
      event.reply(replayChannel, {
        error,
        data: null,
      });
    }
  }

  static async destroy(event, args) {
    const replayChannel = IPCConstants.USER.DESTROY_RESPONSE_CHANNEL;

    try {
      await User.destroy({
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

module.exports = UserController;
