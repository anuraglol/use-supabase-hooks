import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/fonts.css";
import { theme } from "../themes/theme.chakra";
import "@fontsource/fira-code/500.css";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Toaster />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
