const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Genre",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image_background: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      // videogames: {
      //   type: DataTypes.ARRAY(DataTypes.NUMBER),
      //   allowNull: true,
      // },
    },
    { timestamps: false }
  );
};
