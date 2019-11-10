import React, { useEffect, useState, useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  Box,
  AspectRatioBox,
  Image,
  Flex,
  Stack,
  Heading,
  Button,
  Icon
} from "@chakra-ui/core";
import { FaDownload } from "react-icons/fa";
import logo from "./logo.png";
import routes from "../../routes";
import backToTop from "../../helpers/backToTop";
import {FiMenu} from "react-icons/all";

const PWA_INSTALLATION_REFUSAL = "NSD2019-PWA-INSTALLATION-REFUSAL";

export const Topbar = props => {
  const [doesShowInstallationButton, setDoesShowInstallationButton] = useState(
    false
  );
  const deferredPrompt = useRef();

  const { pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    const beforeInstallPrompt = e => {
      deferredPrompt.current = e;
      if (localStorage.getItem(PWA_INSTALLATION_REFUSAL) !== "1") {
        setDoesShowInstallationButton(true);
      }
    };

    window.addEventListener("beforeinstallprompt", beforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", beforeInstallPrompt);
    };
  }, []);

  const handleInstall = () => {
    deferredPrompt.current.prompt();
    deferredPrompt.current.userChoice.then(_ => {
      setDoesShowInstallationButton(false);
      deferredPrompt.current = null;
    });
  };

  const goBack = () => {
    const isPop = history.action === "POP";

    return (
      <Button
        aria-label="Retour"
        variant="ghost"
        ml="-0.6rem"
        px="0"
        as={isPop ? "a" : "button"}
        onClick={isPop ? null : () => history.goBack()}
        href="/"
      >
        <Icon name="arrow-back" size="1.4rem" />
      </Button>
    );
  };

  const { isTopLevel, title } =
    Object.values(routes).find(x => x.pathname === pathname) || {};



  return (
    <Flex backgroundColor="white" shadow="md" minH="3.6rem" {...props}>
      <Stack isInline px="4" py="2" align="center" spacing="4">
        {isTopLevel && (
          <AspectRatioBox w="2.2rem" ratio="1" onClick={() => backToTop()}>
            <Image
              src={logo}
              rounded="md"
              overflow="hidden"
              backgroundColor="brand.100"
            />
          </AspectRatioBox>
        )}
        {!isTopLevel && goBack()}
        <Heading size="sm">
          {!!title && (
            <>
              {title}
              <Box fontSize="0.7rem" color="gray.400">
                NetSecure-Day &bull; #NSD19
              </Box>
            </>
          )}
          <Box id="topbar-title" />
        </Heading>
        {doesShowInstallationButton && (
          <Button
            position="absolute"
            right="4"
            aria-label="Install"
            variant="ghost"
            px="0"
            onClick={handleInstall}
          >
            <Box as={FaDownload} size="1.0rem" />
          </Button>
        )}
        {isTopLevel && (
        <Button
            position="absolute"
            right="4"
            aria-label="Menu"
            variant="ghost"
            px="0"
            onClick={props.onOpenDrawer}
        >
          <Box as={FiMenu} size="1.0rem" />
        </Button>
        )}
      </Stack>
    </Flex>
  );
};
