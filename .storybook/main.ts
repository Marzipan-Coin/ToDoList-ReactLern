// .storybook/main.ts
import path from 'path';
import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-docs'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  webpackFinal: async (storybookConfig) => {
    // 1) Remove any existing default CSS rule
    storybookConfig.module!.rules = storybookConfig.module!.rules!.filter(
      (rule) =>
        // keep everything that isn’t the default .css loader
        !(rule.test instanceof RegExp && rule.test.test('.css'))
    );

    // 2) Add your own .css rule: style → css → postcss
    storybookConfig.module!.rules.push({
      test: /\.css$/,
      include: path.resolve(__dirname, '..'), // or '../src'
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: { importLoaders: 1, modules: false },
        },
        'postcss-loader',
      ],
    });

    return storybookConfig;
  },
};

export default config;