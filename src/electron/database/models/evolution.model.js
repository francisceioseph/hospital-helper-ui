module.exports = (sequelize, DataTypes) => {
  const Evolution = sequelize.define(
    "Evolution",
    {
      text: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      internshipId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { underscored: true }
  );

  Evolution.associate = (models) => {
    Evolution.Internship = Evolution.belongsTo(models.Internship);
  };

  return Evolution;
};
