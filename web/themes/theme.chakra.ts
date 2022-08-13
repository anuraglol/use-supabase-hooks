import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    GT: "GT Walsheim",
    fira: "Fira Code, monospace",
  },
  colors: {
    code: {
      purple: "#A855F7",
      pink: "#E766FC",
      green: "#3FCFB5",
      white: "#FFFFFF",
    },
  },
});

export { theme };
