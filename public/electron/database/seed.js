const bcrypt = require("bcrypt");
const { User } = require("./config");
const salt = 10;

const seedData = async () => {
  try {
    const password = bcrypt.hashSync("admin", salt);
    await User.findOrCreate({
      where: { username: "admin" },
      defaults: {
        name: "Admin",
        username: "admin",
        password,
      },
    });
  } catch (error) {
    console.error(`ERROR: ${JSON.stringify(error)} `);
  }
};

module.exports = seedData;
