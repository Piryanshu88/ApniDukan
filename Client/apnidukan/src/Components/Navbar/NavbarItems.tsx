import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  useColorModeValue,
  Stack,
  Text,
} from "@chakra-ui/react";
import styles from "./NavbarItems.module.css";

import React from "react";

interface propsItems {
  key: string;
  key_data: string[];
}
interface props {
  comp: string;
  list: propsItems[];
}
export const NavbarSec = ({ comp, list }: props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        // variant="ghost"
        mx={1}
        py={[1, 2, 2]}
        px={4}
        zIndex="10000000000"
        _hover={{
          bg: useColorModeValue("white.100", "white.800"),
          borderBottom: "1px solid var(--text-color)",
        }}
        fontWeight="400"
        color={"var(--text-color)"}
        fontSize={"16px"}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      >
        {comp}
      </MenuButton>
      <MenuList
        width={"100vh"}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        zIndex="10000000000"
        border={"none"}
        boxShadow="none"
        borderRadius={"0"}
        borderBottom={"2px solid var(--text-color)"}
      >
        <div className={styles.nav_drop_down}>
          {list.map((el, i) => {
            return (
              <Stack key={i}>
                <Text fontWeight="500" fontSize={"16px"}>
                  {el.key}
                </Text>
                {el?.key_data?.map((item) => {
                  return <Text cursor={"pointer"}>{item}</Text>;
                })}
              </Stack>
            );
          })}
        </div>
      </MenuList>
    </Menu>
  );
};
