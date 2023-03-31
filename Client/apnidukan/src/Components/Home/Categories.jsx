import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import React from "react";
import { Box, Divider, Image, Text } from "@chakra-ui/react";
import tshirt from "../../assets/categories/10221.png";
import trouser from "../../assets/categories/10222.png";
import shoes from "../../assets/categories/10226.png";
import shirt from "../../assets/categories/10227.png";
import jeans from "../../assets/categories/10229.png";
import jac from "../../assets/categories/10230.png";
import hoodie from "../../assets/categories/10231.png";
import newsr from "../../assets/categories/10245.png";
import pres from "../../assets/categories/10252.png";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <Text
        color={"blackAlpha.500"}
        fontSize="20px"
        _hover={{ color: "var(--hover-color )" }}
      >
        <AiOutlineArrowLeft />{" "}
      </Text>
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <Text
        color={"blackAlpha.500"}
        fontSize="20px"
        _hover={{ color: "var(--hover-color )" }}
      >
        <AiOutlineArrowRight />
      </Text>
    </div>
  );
};
var settings = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  infinite: false,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const categories = [
  {
    name: "T-shirts & Tanks",
    img: tshirt,
    item: "Men",
  },
  {
    name: "Hoodies & Sweatshirts",
    img: hoodie,
    item: "Men",
  },
  {
    name: "Trousers",
    img: trouser,
    item: "Men",
  },
  {
    name: "Shirts",
    img: shirt,
    item: "Men",
  },
  {
    name: "Clothes",
    img: newsr,
    item: "Men",
  },
  {
    name: "Shoes",
    img: shoes,
    item: "Men",
  },
  {
    name: "Jeans",
    img: jeans,
    item: "Men",
  },
  {
    name: "Jacket",
    img: jac,
    item: "Men",
  },
  {
    name: "Premium Selection",
    img: pres,
    item: "Men",
  },
];
export const Categories = () => {
  return (
    <div>
      <Slider {...settings}>
        {categories?.map((item, i) => (
          <Link to="/category/mens">
            <Box m="5px" alignItems="center" textAlign={"center"} key={i}>
              <Image
                m="auto"
                _hover={{ transform: "scale(1.1)", transition: "400ms" }}
                p="10px"
                src={item.img}
                alt={item.name}
              />
              <Text fontWeight="500"> {item.item}</Text>
              <Text>{item.name} </Text>
            </Box>
          </Link>
        ))}
      </Slider>
    </div>
  );
};
