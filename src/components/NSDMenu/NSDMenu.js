import {DrawerBody} from "@chakra-ui/core/dist";
import Navigation from "./../Navigation";
import NavigationAction from "./../NavigationAction";
import routes from "../../routes";
import {DrawerContent, Image, Box, Text, Link} from "@chakra-ui/core";
import React from "react";
import {MdToday} from "react-icons/all";
import {MdBusiness, MdFavorite, MdInfo, MdSecurity} from "react-icons/all";

import logo from './logo.png';

export const NSDMenu = () => {
    return (
        <DrawerContent
            bgImage={"url('images/background.png')"}
            bgSize={'50px'}
        >
            <DrawerBody
            >

                <Image src={logo} alt="Logo NetSecure Day" />

                <Navigation>
                    <NavigationAction
                        to={routes.program.pathname}
                        iconElement={MdToday}
                    >
                        Programme
                    </NavigationAction>
                    <NavigationAction
                        to={routes.workshops.pathname}
                        iconElement={MdSecurity}
                    >
                        Workshops
                    </NavigationAction>
                    <NavigationAction
                        to={routes.favorites.pathname}
                        iconElement={MdFavorite}
                    >
                        Favoris
                    </NavigationAction>
                    <NavigationAction
                        to={routes.info.pathname}
                        iconElement={MdInfo}
                    >
                        Info
                    </NavigationAction>
                    <NavigationAction
                        to={routes.sponsors.pathname}
                        iconElement={MdBusiness}
                    >
                        Sponsors
                    </NavigationAction>
                </Navigation>

                <Box position="absolute" bottom={0} width="100%" py={5}>
                    <Text>Forked with ❤️ from&ensp;
                        <Link color="brand.500" href="https://github.com/CodeursEnSeine/CodeursEnSeine-app" isExternal>
                            Codeurs En Seine
                        </Link>
                    </Text>
                </Box>
            </DrawerBody>
        </DrawerContent>
    )
}
