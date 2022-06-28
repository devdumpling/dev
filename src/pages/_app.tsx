import { useState } from 'react';

import { AppProps } from 'next/app';
import Head from 'next/head';

import { MDXProvider } from '@mdx-js/react';

import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import { theme } from '../constants/theme';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] =
    useState<ColorScheme>(preferredColorScheme);
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <>
      <Head>
        <title>Dev Blog</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme,
            ...theme,
          }}
        >
          <MDXProvider>
            <Component {...pageProps} />
          </MDXProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
