const Customer = require("./Customer");
const Category = require("./Category");
const Food = require("./Food");
const Purchase = require("./Purchase");
const Detail = require("./Detail");

Customer.hasMany(Purchase, {
  foreignKey: "customer_id",
  onDelete: "CASCADE",
});

Purchase.belongsTo(Customer, {
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

Purchase.hasMany(Detail, {
  foreignKey: "order_id",
  onDelete: "CASCADE",
});

Detail.belongsTo(Purchase, {
  foreignKey: "order_id",
});

module.exports = { Customer, Category, Food, Purchase, Detail };
