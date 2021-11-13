// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const seedProducts = require('../seeds/product-seeds');
const seedCategories = require('../seeds/category-seeds');

// Products belongsTo Category
// Product.belongsToMany(Category,  {
//   through: {
//     model: Trip,
//     unique: false
//   },
//   as: 'merch'
// });
// // Categories have many Products
// seedCategories.hasMany(seedProducts)
// // Products belongToMany Tags (through ProductTag)

// // Tags belongToMany Products (through ProductTag)

// module.exports = {
//   Product,
//   Category,
//   Tag,
//   ProductTag,
// };


// module.exports = { Product, Category, Tag, ProductTag, seedProducts };
