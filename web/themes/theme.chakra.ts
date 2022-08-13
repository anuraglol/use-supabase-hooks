import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    GT: "GT Walsheim",
    fira: "Fira Code, monospace",
  },
  colors: {
    accent: {
      black: "#040108",
      purple: "#AB71F6",
      border: "#700BF04F",
      glass: "#07070899",
    },
    code: {
      purple: "#A855F7",
      pink: "#E766FC",
      green: "#3FCFB5",
      white: "#FFFFFF",
    },
  },
});

export { theme };
