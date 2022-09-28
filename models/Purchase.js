const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Purchase extends Model {}

Purchase.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    customer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "customer",
        key: "id",
      },
    },
    itemCount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    totalCost: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "purchase",
  }
);

module.exports = Purchase;
