const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
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
});

const MenModel = mongoose.model("men", productSchema);
const LadiesModel = mongoose.model("ladie", productSchema);
const DividendModel = mongoose.model("dividend", productSchema);
const HomeModel = mongoose.model("home", productSchema);
const KidModel = mongoose.model("kid", productSchema);
const SaleModel = mongoose.model("sale", productSchema);
module.exports = {
  MenModel,
  SaleModel,
  HomeModel,
  KidModel,
  LadiesModel,
  DividendModel,
};
