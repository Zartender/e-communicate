// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Category.hasMany(Product);
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});


Product.belongsToMany(Tag, {
  through: ProductTag
});

Tag.belongsToMany(Product, {
  through: ProductTag
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};