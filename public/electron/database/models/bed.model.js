module.exports = (sequelize, DataTypes) => {
  const Bed = sequelize.define(
    "Bed",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { underscored: true }
  );

  Bed.associate = (models) => {
    Bed.Internship = Bed.hasMany(models.Internship);
  };

  return Bed;
};
