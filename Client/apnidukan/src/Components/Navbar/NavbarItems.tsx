import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import React from "react";

interface props {
  comp: string;
  list: string[];
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
      ></MenuList>
    </Menu>
  );
};
