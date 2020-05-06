module.exports = (sequelize, DataTypes) => {
  const Pacient = sequelize.define(
    "Pacient",
    {
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      birthDate: {
        type: DataTypes.DATE,
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

  Pacient.associate = (models) => {
    Pacient.Internship = Pacient.hasMany(models.Internship);
  };

  return Pacient;
};
