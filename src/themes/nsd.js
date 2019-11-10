import { theme } from "@chakra-ui/core";

export const themeNSD = {
  ...theme,
  shadows: {
    ...theme.shadows,
    paper: `
      rgba(32, 47, 71, 0.06) 0px 0.8125rem 0.4375rem -0.4375rem,
      rgba(32, 47, 71, 0.08) 0.625rem 0.25rem 0.4375rem -0.5rem,
      rgba(32, 47, 71, 0.08) -0.625rem 0.25rem 0.4375rem -0.5rem,
      rgba(32, 47, 71, 0.06) 0px 0.1875rem 0.375rem 0px,
      rgba(32, 47, 71, 0.04) 0px -0.25rem 0.5rem -0.125rem,
      rgba(32, 47, 71, 0.03) 0px 0px 0px 0.0625rem;
    `
  },
  colors: {
    ...theme.colors,
    brand: {
      100: "#dce5ff",
      200: "#CCCCCC",
      300: "#0071BC",
      400: "#1A67A9",
      500: "#315E98",
      600: "#455689",
      700: "#c1262d",
      800: "#315E98",
      900: "#664a70",
      1000: "#1c1c1c"
    }
  }
};
