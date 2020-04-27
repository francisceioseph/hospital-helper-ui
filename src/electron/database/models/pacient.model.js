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
    },
    { underscored: true }
  );

  Pacient.associations = (models) => {
    Pacient.Beds = Pacient.belongsToMany(models.Bed, {
      through: "Internships",
      as: "beds",
      foreignKey: "bedId",
      otherKey: "pacientId",
    });
  };

  return Pacient;
};
