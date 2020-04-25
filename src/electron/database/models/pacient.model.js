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

  return Pacient;
};
