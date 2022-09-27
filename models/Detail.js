const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Detail extends Model {}

Detail.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    order_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "order",
        key: "id",
      },
    },
    food_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "food",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "detail",
  }
);

module.exports = Detail;
