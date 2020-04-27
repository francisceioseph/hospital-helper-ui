module.exports = (sequelize, DataTypes) => {
  const Bed = sequelize.define(
    "Bed",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { underscored: true }
  );

  Bed.associate = (models) => {
    Bed.Pacients = Bed.belongsToMany(models.Pacient, {
      through: "Internships",
      as: "pacients",
      foreignKey: "bedId",
      otherKey: "pacientId",
    });
  };

  return Bed;
};
