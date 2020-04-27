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
    Bed.Pacient = Bed.hasOne(models.Pacient);
  };

  return Bed;
};
