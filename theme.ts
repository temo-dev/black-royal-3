import { createTheme, CSSVariablesResolver } from "@mantine/core";

export const theme = createTheme({
  /* Put your mantine theme override here */
  other: {
    appPrimaryColor: "#6c2f13",
    appSecondaryColor: "#fffffd",
  },
});

export const resolver: CSSVariablesResolver = (theme) => ({
  variables: {},
  light: {
    "--mantine-app-primary-color": theme.other.appPrimaryColor,
    "--mantine-app-secondary-color": theme.other.appSecondaryColor,
  },
  dark: {},
});
