import { useState } from 'react';

import { AppProps } from 'next/app';
import Head from 'next/head';

import { MDXProvider } from '@mdx-js/react';

import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  Blockquote,
} from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import { theme } from '../constants/theme';
// import NextImage from 'next/image';
import { Title, Text, Image } from '@mantine/core';

const components = {
  h1: (props) => <Title order={1} mt={'md'} {...props} />,
  h2: (props) => <Title order={2} mt={'md'} {...props} />,
  h3: (props) => <Title order={3} pt={'md'} {...props} />,
  h4: (props) => <Title order={4} mt={'md'} {...props} />,
  h5: (props) => <Title order={5} mt={'md'} {...props} />,
  h6: (props) => <Title order={6} mt={'md'} {...props} />,
  p: (props) => <Text mt={'md'} {...props} />,
  blockquote: (props) => <Blockquote mt={'md'} {...props} />,
  img: (props) => <Image py={'md'} {...props} />,
  // TODO figure out config for using next image with these
  // img: (props) => <NextImage mt={'md'} alt={props.alt} src={props.src} {...props} />,
};

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
            colorScheme,
            ...theme,
          }}
        >
          <MDXProvider components={components}>
            <Component {...pageProps} />
          </MDXProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
