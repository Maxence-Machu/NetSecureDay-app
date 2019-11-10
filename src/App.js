import React from "react";
import {
  ThemeProvider,
  useDisclosure,
  CSSReset,
  Box,
  Flex,
  Drawer,
  DrawerOverlay,
  Button, DrawerContent
} from "@chakra-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MdSecurity, MdFavorite, MdToday, MdInfo, MdBusiness } from "react-icons/md";
import Navigation from "./components/Navigation";
import { Program } from "./pages/Program";
import { Informations } from "./pages/Informations";
import { themeNSD } from "./themes/nsd";
import { Talk } from "./pages/Talk";
import { FavoritesContextProvider } from "./contexts/FavoritesContext";
import NavigationAction from "./components/NavigationAction";
import routes from "./routes";
import { Topbar } from "./components/Topbar";
import { SCROLLVIEW_ID } from "./helpers/backToTop";
import { NotFound404 } from "./pages/NotFound404";
import { Sponsors } from "./pages/Sponsors";
import {DrawerBody, DrawerHeader} from "@chakra-ui/core/dist";
import {FaDownload} from "react-icons/all";
import {NSDMenu} from "./components/NSDMenu/NSDMenu";
import {Workshops} from "./pages/Workshops";

const updateCssViewportHeight = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

updateCssViewportHeight();
window.addEventListener("resize", () => {
  updateCssViewportHeight();
});

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <React.StrictMode>
      <ThemeProvider theme={themeNSD}>
        <CSSReset />
        <Router>
          <FavoritesContextProvider>
            <Flex
              color="brand.1000"
              direction="column"
              h="100vh"
              style={{
                height: "calc(var(--vh, 1vh) * 100)"
              }}
            >
              <Topbar zIndex="1" onOpenDrawer={onOpen}/>
              <Box flex="1" position="relative">
                <Box
                  id={SCROLLVIEW_ID}
                  position="absolute"
                  top="0"
                  left="0"
                  bottom="0"
                  right="0"
                  overflow="auto"
                >
                  <Switch>
                    <Route exact path={routes.program.pathname}>
                      <Program />
                    </Route>
                    <Route exact path={routes.workshops.pathname}>
                      <Workshops />
                    </Route>
                    <Route exact path={routes.favorites.pathname}>
                      <Program isFavorite />
                    </Route>
                    <Route exact path={routes.info.pathname}>
                      <Informations />
                    </Route>
                    <Route exact path={routes.talk.pathname}>
                      <Talk />
                    </Route>
                    <Route exact path={routes.sponsors.pathname}>
                      <Sponsors />
                    </Route>
                    <Route path={routes.notFound.pathname}>
                      <NotFound404 />
                    </Route>
                  </Switch>
                </Box>
              </Box>
              <Drawer placement={'right'} onClose={onClose} isOpen={isOpen} size={'xs'}>
                <DrawerOverlay />
                <NSDMenu/>
              </Drawer>
            </Flex>
          </FavoritesContextProvider>
        </Router>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
