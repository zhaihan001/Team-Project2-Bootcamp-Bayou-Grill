const sequelize = require("../config/connection");
const { Customer, Category, Food, Purchase, Detail } = require("../models");

const customerData = require("./customerData.json");
const categoryData = require("./categoryData.json");
const foodData = require("./foodData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Customer.bulkCreate(customerData, {
    individualHooks: true,
    returning: true,
  });

  await Category.bulkCreate(categoryData, {
    individualHooks: true,
    returning: true,
  });

  await Food.bulkCreate(foodData, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};

seedDatabase();
