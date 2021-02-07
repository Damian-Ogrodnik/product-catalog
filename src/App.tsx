import React from 'react';
import { Provider } from 'react-redux';

import { store } from './config/rootStore';
import { AppRoutes } from 'routing/AppRoutes';

export const App = () => (
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);
