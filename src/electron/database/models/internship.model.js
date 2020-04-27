module.exports = (sequelize, DataTypes) => {
  const Internship = sequelize.define(
    "Internship",
    {
      startDate: { type: DataTypes.DATE, allowNull: false },
      endDate: { type: DataTypes.DATE, allowNull: true },
      bedId: {
        type: DataTypes.INTEGER,
        references: {
          model: "beds", // 'Actors' would also work
          key: "id",
        },
      },
      pacientId: {
        type: DataTypes.INTEGER,
        references: {
          model: "pacients",
          key: "id",
        },
      },
    },
    { underscored: true }
  );

  Internship.associate = (models) => {
    Internship.Bed = Internship.belongsTo(models.Bed);
    Internship.Pacient = Internship.belongsTo(models.Pacient);
  };

  return Internship;
};
