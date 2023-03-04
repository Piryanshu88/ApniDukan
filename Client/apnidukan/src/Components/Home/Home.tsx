import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import img from "../../assets/f_home.png";
import img2 from "../../assets/swomen.png";
import { Categories } from "./Categories";
import axios, { AxiosResponse } from "axios";
import { Data, ProDucts } from "../../constants";
import { Scroller } from "./Categories/Scroller";
//C:\Users\Piryanshu\Desktop\ApniDukan\Client\apnidukan\src\assets\f_home.png

const getData = async (str: string) => {
  const response: AxiosResponse<Data> = await axios.get(
    `https://rich-erin-walkingstick-hem.cyclic.app/products/${str}`
  );
  return response.data;
};

export const HomeComp = () => {
  const [arrivalData, setArrivalData] = useState<ProDucts[]>([]);
  const [activeArrival, setActiveArrival] = useState<string>("ladies");

  const handleArrivals = (a: string, b: string) => {
    setActiveArrival(a);
    getData(b).then((re: Data) => {
      setArrivalData(re.data);
    });
  };
  useEffect(() => {
    if (activeArrival == "ladies") {
      getData("ladies").then((re: Data) => {
        setArrivalData(re.data);
      });
    }
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.home_section_1}>
        <div></div>
        <div>
          <Image src={img} />
        </div>
        <Text
          fontSize={"17px"}
          color="#ffffff"
          fontWeight={"600"}
          marginBottom="20px"
        >
          The new collection is out now
        </Text>
        <Flex justifyContent={"center"} gap="10px" marginBottom={"40px"}>
          <Button
            borderRadius={"0"}
            color="var(--text-color)"
            padding={"8px"}
            fontSize="14px"
            margin={"0"}
          >
            Shop Now{" "}
          </Button>
          <Button
            borderRadius={"0"}
            color="var(--text-color)"
            padding={"8px"}
            fontSize="14px"
            margin={"0"}
          >
            Get Inspired
          </Button>
        </Flex>
      </div>

      <div className={styles.home_section_2}>
        <div></div>
        <div>
          <Image src={img2} />
        </div>
        <Text
          fontSize={"17px"}
          color="#ffffff"
          fontWeight={"600"}
          marginBottom="20px"
        >
          The new collection is out now
        </Text>
        <Flex justifyContent={"center"} gap="10px" marginBottom={"40px"}>
          <Button
            borderRadius={"0"}
            color="var(--text-color)"
            padding={"8px"}
            fontSize="14px"
            margin={"0"}
          >
            Shop Now{" "}
          </Button>
        </Flex>
      </div>

      <div className={styles.shop_box}>
        <div>
          <Text color="#ffffff" fontWeight={"600"}>
            The color burst collection
          </Text>
        </div>
        <div>
          <Text color="#ffffff" fontSize={"13px"}>
            All the vibrant fits for this spring!
          </Text>
        </div>
        <div>
          {" "}
          <Flex justifyContent={"center"} gap="10px" marginBottom={"20px"}>
            <Button
              borderRadius={"0"}
              color="var(--text-color)"
              padding={"8px"}
              fontSize="14px"
              margin={"0"}
            >
              Shop Now{" "}
            </Button>
          </Flex>
        </div>
      </div>

      {/* categories */}

      <div className={styles.category_box}>
        <Text textAlign="left" fontSize={"xl"} fontWeight="500">
          Categories for you
        </Text>
        <Categories />
      </div>

      {/* new arrivals */}

      <div className={styles.new_arrivals}>
        <Text textAlign="left" fontSize={"xl"} fontWeight="500">
          New Arrivals
        </Text>
        <div className={styles.new_arrivals_category}>
          <Text
            marginRight="16px"
            padding="8px 16px"
            border={"1px solid #222"}
            fontWeight="500"
            marginBottom={"10px"}
            borderRadius="20px"
            color={activeArrival == "ladies" ? "#fff" : "#222"}
            background={
              activeArrival == "ladies" ? "var(--hover-color)" : "#fff"
            }
            onClick={() => handleArrivals("ladies", "ladies")}
            cursor="pointer"
          >
            Ladies
          </Text>
          <Text
            marginRight="16px"
            padding="8px 16px"
            marginBottom={"10px"}
            border={"1px solid #222"}
            fontWeight="500"
            borderRadius="20px"
            onClick={() => handleArrivals("men", "mens")}
            color={activeArrival == "men" ? "#fff" : "#222"}
            background={activeArrival == "men" ? "var(--hover-color)" : "#fff"}
            cursor="pointer"
          >
            Men
          </Text>
          <Text
            marginRight="16px"
            padding="8px 16px"
            marginBottom={"10px"}
            border={"1px solid #222"}
            fontWeight="500"
            borderRadius="20px"
            color={activeArrival == "divided" ? "#fff" : "#222"}
            background={
              activeArrival == "divided" ? "var(--hover-color)" : "#fff"
            }
            cursor="pointer"
            onClick={() => handleArrivals("divided", "dividend")}
          >
            Divided
          </Text>
          <Text
            marginRight="16px"
            padding="8px 16px"
            marginBottom={"10px"}
            border={"1px solid #222"}
            cursor="pointer"
            fontWeight="500"
            borderRadius="20px"
            onClick={() => handleArrivals("baby", "kids")}
            color={activeArrival == "baby" ? "#fff" : "#222"}
            background={activeArrival == "baby" ? "var(--hover-color)" : "#fff"}
          >
            Baby
          </Text>
          <Text
            marginRight="16px"
            padding="8px 16px"
            border={"1px solid #222"}
            cursor="pointer"
            marginBottom={"10px"}
            fontWeight="500"
            borderRadius="20px"
            color={activeArrival == "kids" ? "#fff" : "#222"}
            onClick={() => handleArrivals("kids", "kids")}
            background={activeArrival == "kids" ? "var(--hover-color)" : "#fff"}
          >
            Kids
          </Text>
          <Text
            marginRight="16px"
            padding="8px 16px"
            cursor="pointer"
            border={"1px solid #222"}
            marginBottom={"10px"}
            fontWeight="500"
            borderRadius="20px"
            color={activeArrival == "hmhome" ? "#fff" : "#222"}
            background={
              activeArrival == "hmhome" ? "var(--hover-color)" : "#fff"
            }
            onClick={() => handleArrivals("hmhome", "home")}
          >
            H & M Home
          </Text>
          <Text
            cursor="pointer"
            marginRight="16px"
            padding="8px 16px"
            marginBottom={"10px"}
            border={"1px solid #222"}
            fontWeight="500"
            borderRadius="20px"
            color={activeArrival == "sport" ? "#fff" : "#222"}
            background={
              activeArrival == "sport" ? "var(--hover-color)" : "#fff"
            }
            onClick={() => handleArrivals("sport", "sports")}
          >
            Sport
          </Text>
        </div>
        <div className={styles.new_arrivals_slider}>
          <Scroller data={arrivalData} />
        </div>
      </div>

      {/* kids section
       */}
      <div className={styles.kids_section}>
        
      </div>
    </div>
  );
};
