import { Button, IconButton, useDisclosure } from "@chakra-ui/react";
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
export const MobileNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: any = React.useRef();
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
        <DrawerContent background={"var(--color-primary)"}>
          <DrawerCloseButton />
          <DrawerBody></DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
