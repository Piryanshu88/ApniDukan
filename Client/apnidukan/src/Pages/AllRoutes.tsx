import { Image } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { CartPage } from "./Cart/CartPage";
import { Favourite } from "./Favourite/Favourite";
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
      <Route path="/favourite" element={<Favourite />} />
      <Route
        path="*"
        element={
          <Image
            src="https://cdni.iconscout.com/illustration/premium/thumb/404-page-not-found-4190275-3468592.png"
            margin={"auto"}
            objectFit="contain"
            marginTop={"20px"}
            marginBottom={"20px"}
          />
        }
      />
    </Routes>
  );
};
