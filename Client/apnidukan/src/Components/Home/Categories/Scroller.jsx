import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Scroller.css";
import { Box, Image, Stack, Text } from "@chakra-ui/react";
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
  speed: 500,
  slidesToShow: 4,
  dots: true,
  infinite: true,
  slidesToScroll: 4,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
  appendDots: (dots) => (
    <div>
      <ul style={{ margin: "0px", color: "var(--hover-color)" }}> {dots} </ul>
    </div>
  ),
};

export const Scroller = (props) => {
  const { data, c } = props;
  return (
    <div>
      <Slider {...settings}>
        {data?.map((item, i) => (
          <Link to={`/singleproduct/${item.articleCode}/${c}`}>
            <Stack
              key={i}
              m="5px"
              textAlign={"center"}
              justifyContent="flex-start"
              alignItems="flex-start"
              cursor={"pointer"}
            >
              <Image
                m="auto"
                p="10px"
                pb={"0"}
                src={item.image[0].src}
                alt={item.title}
              />
              <Text
                textAlign={"left"}
                p="0"
                pl="10px"
                fontWeight="500"
                textOverflow={"ellipsis"}
              >
                {" "}
                {item.title}
              </Text>
              <Text textAlign={"left"} p="0" m="0" pl="10px">
                Rs.{item.price}{" "}
              </Text>
            </Stack>
          </Link>
        ))}
      </Slider>
    </div>
  );
};
