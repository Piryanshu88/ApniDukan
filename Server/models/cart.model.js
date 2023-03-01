const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  articleCode: String,
  title: String,
  category: String,
  image: Array,
  favouritesTracking: String,
  favouritesSavedText: String,
  favouritesNotSavedText: String,
  price: Number,
  sellingAttribute: String,
  swatchesTotal: String,
  swatches: Array,
  brandName: String,
  outOfStockText: String,
  comingSoon: String,
  redPrice: String,
  authorID: String,
  quantity: { type: Number, default: 1 },
});

const CartModel = mongoose.model("cart", cartSchema);

module.exports = {
  CartModel,
};
