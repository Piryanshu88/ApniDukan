import React from "react";
import { Route, Routes } from "react-router-dom";
import { CartPage } from "./Cart/CartPage";
import { Home } from "./Home/Home";
import { ProductPage } from "./ProductPage/ProductPage";
import { SignUpPage } from "./SignUp/SignUpPage";
import { SingleProductPage } from "./SingleProductPage/SingleProductPage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/singleproduct/:articleCode/:category"
        element={<SingleProductPage />}
      />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/category/:category" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};
