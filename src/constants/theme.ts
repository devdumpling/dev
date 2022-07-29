import { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  fontFamily:
    'Georgia, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
  fontFamilyMonospace:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
  headings: {    
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
    sizes: {
      h1: {        
        lineHeight: 1.4,
      },
    },
  },
  colors: {
    dark: [
      '#d5d7e0',
      '#acaebf',
      '#8c8fa3',
      '#666980',
      '#4d4f66',
      '#34354a',
      '#2b2c3d',
      '#1d1e30',
      '#0c0d21',
      '#01010a',
    ],
    light: [
      '#fbf9ef',
      '#e4e7eb',
      '#d2d6d9',
      '#bfc1c4',
      '#a9acaf',
      '#8c8fa3',
      '#73777b',
      '#5c606b',
      '#3d3f4b',
      '#1d1e30',
    ],
  },
};
