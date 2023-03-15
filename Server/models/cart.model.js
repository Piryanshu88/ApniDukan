const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  code: String,
  name: String,

  color: Object,
  whitePrice: Object,
  priceType: String,
  importedBy: String,
  countryOfProduction: String,
  measurements: Array,
  fits: Array,
  keyFibreTypes: Array,
  articlesList: Array,
  swatchesType: String,
  rootCategoryPath: String,
  productCountryOfProduction: String,
  yearOfProduction: String,
  materialDetails: Array,
  authorID: String,
  quantity: { type: Number, default: 1 },
});

const CartModel = mongoose.model("cart", cartSchema);

module.exports = {
  CartModel,
};
