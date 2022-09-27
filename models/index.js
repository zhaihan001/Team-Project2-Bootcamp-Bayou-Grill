const Customer = require("./Customer");
const Category = require("./Category");
const Food = require("./Food");
const Order = require("./Order");
const Detail = require("./Detail");

Customer.hasMany(Order, {
  foreignKey: "customer_id",
  onDelete: "CASCADE",
});

Order.belongsTo(Customer, {
  foreignKey: "customer_id",
});

Category.hasMany(Food, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

Food.belongsTo(Category, {
  foreignKey: "category_id",
});

Food.hasMany(Detail, {
  foreignKey: "food_id",
  onDelete: "CASCADE",
});

Detail.belongsTo(Food, {
  foreignKey: "food_id",
});

Order.hasMany(Detail, {
  foreignKey: "order_id",
  onDelete: "CASCADE",
});

Detail.belongsTo(Order, {
  foreignKey: "order_id",
});

module.exports = { Customer, Category, Food, Order, Detail };
