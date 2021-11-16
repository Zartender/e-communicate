const sequelize = require('../config/connection');

const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await sequelize.sync({ force: true }); seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await sequelize.sync({ force: true }); seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await sequelize.sync({ force: true }); seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  await sequelize.sync({ force: true }); seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();
module.exports = {
  seedCategories,
  seedProducts,
  seedTags,
  seedProductTags,
};