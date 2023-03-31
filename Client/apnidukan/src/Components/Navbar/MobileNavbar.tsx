import {
  Button,
  IconButton,
  Image,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import styles from "./Navbar.module.css";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
export const MobileNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: any = React.useRef();
  const navigate = useNavigate();
  const handleClick = (route: string) => {
    onClose();
    navigate(`/category/${route}`);
  };

  return (
    <div className={styles.mobile_nav}>
      <Button
        ref={btnRef}
        onClick={onOpen}
        as={IconButton}
        colorScheme=""
        icon={<HamburgerIcon fontSize={"20px"} />}
        variant="outline"
        border={"none"}
      ></Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xs"
      >
        {/* <DrawerOverlay /> */}
        <DrawerContent background={"var(--color-bg)"}>
          <DrawerCloseButton />
          <DrawerBody>
            <Image src="" />
            <Stack
              marginTop="40px"
              fontSize={"xl"}
              fontWeight="400"
              alignItems={"center"}
              gap="15px"
            >
              <Text
                onClick={() => handleClick("ladies")}
                cursor={"pointer"}
                _hover={{ color: "var(--text-color)" }}
              >
                Ladies
              </Text>

              <Text
                cursor={"pointer"}
                _hover={{ color: "var(--text-color)" }}
                onClick={() => handleClick("mens")}
              >
                Mens
              </Text>

              <Text
                cursor={"pointer"}
                _hover={{ color: "var(--text-color)" }}
                onClick={() => handleClick("dividend")}
              >
                Dividend
              </Text>

              <Text
                onClick={() => handleClick("sports")}
                cursor={"pointer"}
                _hover={{ color: "var(--text-color)" }}
              >
                Sports
              </Text>

              <Text
                cursor={"pointer"}
                _hover={{ color: "var(--text-color)" }}
                onClick={() => handleClick("home")}
              >
                Home
              </Text>

              <Text
                onClick={() => handleClick("kids")}
                cursor={"pointer"}
                _hover={{ color: "var(--text-color)" }}
              >
                Kids
              </Text>

              <Text
                onClick={() => handleClick("sale")}
                cursor={"pointer"}
                _hover={{ color: "var(--text-color)" }}
              >
                Sale
              </Text>

              <Text cursor={"pointer"} _hover={{ color: "var(--text-color)" }}>
                Sustainability
              </Text>
            </Stack>
          </DrawerBody>
          <DrawerFooter>
            <Image
              src="https://readme-typing-svg.demolab.com/?font=Fira+Code&size=14&duration=4000&pause=1000&color=444444&background=FFFFFF00&width=220&height=31&lines=Made+with+🧡+by+Piryanshu"
              alt="Typing SVG"
              // style={{ margin: "auto" }}
              margin={"auto"}
            />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
