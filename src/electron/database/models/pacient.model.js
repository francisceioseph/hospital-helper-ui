module.exports = (sequelize, DataTypes) => {
  const Pacient = sequelize.define(
    "Pacient",
    {
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      birthDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      motherName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      prontuario: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bed_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    { underscored: true }
  );

  Pacient.associations = (models) => {
    Pacient.Bed = models.belongsTo(models.Bed);
  };

  return Pacient;
};
