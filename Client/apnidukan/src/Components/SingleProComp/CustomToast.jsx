import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

export const CustomToast = ({ products, cartToast, articleCode }) => {
  return (
    <Box
      display={cartToast}
      position="absolute"
      right={"10px"}
      top="0"
      marginTop={"100px"}
      background="#fff"
      padding={"10px"}
      height="150px"
      w={"240px"}
    >
      <Box display={"flex"}>
        <Image
          src={
            products?.articlesList?.filter((el) => el?.code == articleCode)[0]
              ?.galleryDetails[0]?.baseUrl
          }
          width="40%"
        />
        <div>
          <Text textOverflow={"ellipsis"} fontSize="15px">
            {products?.name}
          </Text>
          <Text
            fontWeight={"500"}
          >{`Rs. ${products?.whitePrice?.price}.00`}</Text>
        </div>
      </Box>
    </Box>
  );
};
