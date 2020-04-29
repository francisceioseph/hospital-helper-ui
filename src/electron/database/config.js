const os = require("os");
const path = require("path");
const Sequelize = require("sequelize");

const Internship = require("./models/internship.model");
const Pacient = require("./models/pacient.model");
const Bed = require("./models/bed.model");
const Evolution = require("./models/evolution.model");

const dbPath = path.resolve(os.homedir(), "hospital_helper_database.sqlite3");

const sequelize = new Sequelize({
  database: "hospital_helper",
  dialect: "sqlite",
  storage: dbPath,
  operatorsAliases: false,
});

const db = {
  Pacient: Pacient(sequelize, Sequelize),
  Bed: Bed(sequelize, Sequelize),
  Internship: Internship(sequelize, Sequelize),
  Evolution: Evolution(sequelize, Sequelize),
};

// Set all the models associassions

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
