const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  code: String,
  name: String,
  description: String,
  sapProductName: String,
  color: Object,
  whitePrice: Object,
  importedBy: String,
  importedDate: String,
  netQuantity: String,
  countryOfProduction: String,
  productTypeName: String,
  fits: Array,
  constructionDescr: String,
  customerGroup: String,
  rootCategoryPath: String,
  productKey: String,
  productCountryOfProduction: String,
  showGarmentsInfo: Boolean,
  yearOfProduction: String,
  presentationTypes: String,
  multipack: Boolean,
  newProduct: Boolean,
  authorID: String,
  quantity: { type: Number, default: 1 },
});

const CartModel = mongoose.model("cart", cartSchema);

module.exports = {
  CartModel,
};
