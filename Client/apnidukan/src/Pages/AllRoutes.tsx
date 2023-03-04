import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home/Home";
import { SingleProductPage } from "./SingleProductPage/SingleProductPage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/singleproduct/:id" element={<SingleProductPage />} />
    </Routes>
  );
};
