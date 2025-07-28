import type { Preview } from '@storybook/react-webpack5'
import '../src/index.css'
import { Provider } from 'react-redux';
import { store } from '../src/store';
import React from 'react';

const preview: Preview = {
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    )
  ],
parameters: {
  controls: {
    matchers: {
      color: /(background|color)$/i,
        date: /Date$/i,
      },
  },
},
};

export default preview;