import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home/Home";
import { ProductPage } from "./ProductPage/ProductPage";
import { SingleProductPage } from "./SingleProductPage/SingleProductPage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/singleproduct/:id" element={<SingleProductPage />} />
      <Route path="/category/:category" element={<ProductPage />} />
    </Routes>
  );
};
