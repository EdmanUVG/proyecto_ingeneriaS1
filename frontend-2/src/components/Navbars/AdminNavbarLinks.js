import { useState } from "react";

import {
  Button,
  Flex,
  Text,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";

import { ProfileIcon, SettingsIcon } from "../Icons/Icons";

import Configurator from "../Configurator/Configurator";
import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderLinks(props) {
  const { variant, children, secondary, ...rest } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [setSidebarVariant] = useState("transparent");
  const [fixed, setFixed] = useState(false);

  // Chakra Color Mode
  let navbarIcon = useColorModeValue("gray.500", "gray.200");

  if (secondary) {
    navbarIcon = "white";
  }
  const settingsRef = React.useRef();

  return (
    <Flex
      pe={{ sm: "0px", md: "16px" }}
      w={{ sm: "100%", md: "auto" }}
      alignItems="center"
      flexDirection="row"
    >
      <NavLink to="/login">
        <Button
          ms="0px"
          px="0px"
          me={{ sm: "2px", md: "16px" }}
          color={navbarIcon}
          variant="transparent-with-icon"
          leftIcon={
            document.documentElement.dir ? (
              ""
            ) : (
              <ProfileIcon color={navbarIcon} w="22px" h="22px" me="6px" />
            )
          }
        >
          <Text display={{ sm: "none", md: "flex" }}>Usuario</Text>
        </Button>
      </NavLink>

      <SettingsIcon
        cursor="pointer"
        ms={{ base: "16px", xl: "0px" }}
        me="26px"
        ref={settingsRef}
        onClick={onOpen}
        color={navbarIcon}
        w="18px"
        h="18px"
      />
      <Configurator
        isOpen={isOpen}
        onClose={onClose}
        isChecked={fixed}
        onSwitch={(value) => {
          setFixed(value);
        }}
        onOpaque={() => setSidebarVariant("opaque")}
        onTransparent={() => setSidebarVariant("transparent")}
      />
    </Flex>
  );
}

HeaderLinks.propTypes = {
  variant: PropTypes.string,
  fixed: PropTypes.bool,
  secondary: PropTypes.bool,
  onOpen: PropTypes.func,
};
