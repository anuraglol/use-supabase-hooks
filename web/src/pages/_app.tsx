import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/fonts.css";
import { theme } from "@/themes/theme.chakra";
import "@fontsource/fira-code/500.css";
import { Toaster } from "react-hot-toast";
import { NextSeo } from "next-seo";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg" href="/assets/icon.svg" />
      </Head>
      <NextSeo
        title="use-supabase-hooks"
        description="React hooks for supabase with type safety"
        openGraph={{
          url: "https://www.use-supabase-hooks.vercel.app/",
          title: "use-supabase-hooks",
          description: "React hooks for supabase with type safety",
          images: [
            {
              url: "https://res.cloudinary.com/ddum5vpp3/image/upload/v1660393832/og_dtyv28.png",
              width: 800,
              height: 420,
              alt: "use-supabase-hooks",
            },
          ],
        }}
        twitter={{
          handle: "@imanuraglol",
          cardType: "summary_large_image",
        }}
      />
      <ChakraProvider theme={theme}>
        <Toaster />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
