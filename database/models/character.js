const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class Character extends Model {}

Character.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    house: {
      type: DataTypes.STRING,
    },
    slug: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
    },
    rank: {
      type: DataTypes.INTEGER,
    },
    titles: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    tableName: "characters",
  }
);

module.exports = Character;
